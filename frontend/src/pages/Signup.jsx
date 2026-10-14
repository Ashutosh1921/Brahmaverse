import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import "../styles/shared.css";
import "./Signup.css";

const numpadKeys = [
  { num: "1", letters: "" },
  { num: "2", letters: "ABC" },
  { num: "3", letters: "DEF" },
  { num: "4", letters: "GHI" },
  { num: "5", letters: "JKL" },
  { num: "6", letters: "MNO" },
  { num: "7", letters: "PQRS" },
  { num: "8", letters: "TUV" },
  { num: "9", letters: "WXYZ" },
  { num: "", letters: "" },
  { num: "0", letters: "" },
  { num: "⌫", letters: "" },
];

function Signup() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleNumpadPress = (key) => {
    if (key === "⌫") {
      setPhone((prev) => prev.slice(0, -1));
    } else if (key !== "" && phone.length < 10) {
      setPhone((prev) => prev + key);
    }
  };

  const formatPhone = (num) => {
    if (num.length <= 5) return num;
    return num.slice(0, 5) + " " + num.slice(5);
  };

  const handleGetOtp = () => {
    if (phone.length === 10) {
      navigate("/verify-otp", { state: { phone } });
    }
  };

  return (
    <div className="signup-container">
      <StatusBar />

      <div className="screen-header">
        <button className="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="signup-content">
        <h1 className="signup-title">Sign Up to Fastor</h1>
        <p className="signup-description">
          Let us know your mobile number and we will send you an OTP for verification.
        </p>

        <div className="phone-input-wrapper">
          <span className="country-code">+91</span>
          <span className="country-code-divider">|</span>
          <input
            type="tel"
            className="phone-input"
            placeholder="~ 00000"
            value={formatPhone(phone)}
            readOnly
          />
        </div>
      </div>

      <div className="signup-bottom">
        <button
          className="primary-btn"
          onClick={handleGetOtp}
          disabled={phone.length !== 10}
        >
          Get OTP
        </button>
        <p className="signup-terms">
          By clicking, I accept the <a href="#">Terms & Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </div>

      <div className="numpad">
        {numpadKeys.map((key, index) => (
          <button
            key={index}
            className={`numpad-key ${key.num === "" ? "numpad-key-empty" : ""}`}
            onClick={() => handleNumpadPress(key.num)}
            disabled={key.num === ""}
          >
            <span>{key.num}</span>
            {key.letters && (
              <span className="numpad-key-letters">{key.letters}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Signup;
