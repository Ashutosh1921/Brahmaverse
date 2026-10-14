import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import OtpVerification from "./pages/OtpVerification";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
