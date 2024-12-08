import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import ContextProvider from "./components/context/Context";
import Chat from "./components/Chat";
import LegalChat from "./components/LegalChat";
import InstructionsPage from "./components/Instructions";
import FeedbackButton from "./components/feedback/Feedback";

/* The App component includes routing to navigate between Homepage and Chat components. */

const App = () => {
  return (
    // <ContextProvider>
    <Router>
      <FeedbackButton />
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        
        {/* Route for Chat */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/legalchat" element={<LegalChat />} />

      </Routes>
    </Router>
    // </ContextProvider>
  );
};

export default App;
