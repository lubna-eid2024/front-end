import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken"); 
    if (!token) {
      navigate("/Login");
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/Login"); 
  }

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </>
  );
}
