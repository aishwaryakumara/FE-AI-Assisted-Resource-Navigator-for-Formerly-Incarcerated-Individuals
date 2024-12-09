// src/components/auth/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("SessionToken: ",data.access_token)
        sessionStorage.setItem("sessionToken", data.access_token);
        navigate("/legalchat");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />
      <button onClick={handleLogin} className="auth-button">Login</button>
      <p>
        Don’t have an account?{" "}
        <span className="auth-link" onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
