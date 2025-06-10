import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/login", form);
    localStorage.setItem("token", res.data.data.accessToken);
    localStorage.setItem("email", res.data.data.email);
    localStorage.setItem("role", res.data.data.role);
    alert("Login successful");
    navigate("/otp");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="user">User</option>
        <option value="doctor">Doctor</option>
      </select>
      <button>Login</button>
    </form>
  );
}
