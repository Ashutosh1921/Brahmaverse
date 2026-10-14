import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import "../styles/shared.css";
import "./OtpVerification.css";

function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state?.phone || "1234567890";

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const formatPhone = (num) => {
    return "+91 " + num.slice(0, 5) + " " + num.slice(5);
  };

  const formatTimer = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleContinue = () => {
    const code = otp.join("");
    if (code.length === 6) {
      navigate("/home");
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      setOtp(["", "", "", "", "", ""]);
    }
  };

  return (
    <div className="otp-container">
      <StatusBar />

      <div className="screen-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="otp-content">
        <h1 className="otp-title">6-digit code</h1>
        <p className="otp-subtitle">Please enter the code we've sent to</p>
        <p className="otp-phone">{formatPhone(phone)}</p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <span key={index}>
              {index === 3 && <span className="otp-dash">-</span>}
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="otp-input"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            </span>
          ))}
        </div>

        <p className="otp-resend">
          I didn't receive a code{" "}
          {timer > 0 ? (
            <span className="otp-resend-timer">({formatTimer(timer)})</span>
          ) : (
            <button
              onClick={handleResend}
              style={{
                background: "none",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "13px",
                textDecoration: "underline",
                padding: 0,
              }}
            >
              Resend
            </button>
          )}
        </p>
      </div>

      <div className="otp-bottom">
        <button
          className="primary-btn"
          onClick={handleContinue}
          disabled={otp.some((d) => d === "")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default OtpVerification;
