import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; 


export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    // You can also call a protected API here
  }, []);

  return <h1 className="text-2xl">Welcome to Dashboard</h1>;
}
