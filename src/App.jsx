import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import ContextProvider from "./components/context/Context";
import Chat from "./components/Chat";
import LegalChat from "./components/LegalChat";
import InstructionsPage from "./components/Instructions";
import FeedbackButton from "./components/feedback/Feedback";
import LoginPage from "./components/UserLogin/LoginPage";
import RegisterPage from "./components/UserLogin/RegisterPage";
import LegalAIHeader from "./components/LegalAIHeader";

/* The App component includes routing to navigate between Homepage and Chat components. */

const App = () => {
  return (
    // <ContextProvider>
    <Router>
      <LegalAIHeader />
      <FeedbackButton />
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/instructions" element={<InstructionsPage />} />

        {/* Route for Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Route for Chat */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/legalchat" element={<LegalChat />} />

      </Routes>
    </Router>
    // </ContextProvider>
  );
};

export default App;
