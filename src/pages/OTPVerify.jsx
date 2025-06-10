import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function OTPVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const requestOtp = async () => {
    await API.get("/email-verify/request");
    alert("OTP sent to your email");
  };

  const submitOtp = async () => {
    await API.post("/email-verify/submit", { otp });
    alert("Email verified");
    navigate("/dashboard");
  };

  return (
    <div>
      <button onClick={requestOtp}>Request OTP</button>
      <input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
      <button onClick={submitOtp}>Verify</button>
    </div>
  );
}
