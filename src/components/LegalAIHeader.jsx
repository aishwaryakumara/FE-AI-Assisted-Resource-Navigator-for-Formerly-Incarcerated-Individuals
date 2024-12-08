// src/components/common/LegalAIHeader.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LegalAIHeader.css"; // Ensure CSS file is correctly imported
import { FaCog } from "react-icons/fa"; // Import settings icon

const LegalAIHeader = () => {
  const navigate = useNavigate();
  const sessionToken = sessionStorage.getItem("sessionToken");

  const handleLogout = () => {
    sessionStorage.removeItem("sessionToken");
    navigate("/login");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <header className="legalai-header">
      <div className="logo" onClick={() => navigate("/")}>
        LegalAI
      </div>
      <nav className="nav-menu">
        <a onClick={() => navigate("/")} className="nav-link">
          Home
        </a>
        <a onClick={() => navigate("/chat")} className="nav-link">
          Chat
        </a>
        <a onClick={() => navigate("/legalchat")} className="nav-link">
          Legal Chat
        </a>
        {!sessionToken ? (
          <>
            <a onClick={() => navigate("/login")} className="nav-link">
              Login
            </a>
            <a onClick={() => navigate("/register")} className="nav-link">
              Register
            </a>
          </>
        ) : (
          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
        )}
        <FaCog className="settings-icon" onClick={handleSettings} />
      </nav>
    </header>
  );
};

export default LegalAIHeader;
