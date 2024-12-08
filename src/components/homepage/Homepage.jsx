import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import FeedbackButton from "../feedback/Feedback";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="flex flex-col h-screen bg-gray-800 relative">
      {/* Orbital Background */}
      <img
        src="/O4.png"
        alt="Orbital"
        className="absolute bottom-0 left-0 opacity-10 pointer-events-none animate-spin-slow"
        style={{ zIndex: 0 }}
      />

      <div className="flex flex-1 items-center justify-between px-8">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center gap-6 w-1/2">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Welcome to LegalAI
          </h1>
          <h2 className="text-2xl font-bold text-gray-50">
            Empowering People with Artificial Intelligence
          </h2>
          <h3 className="text-lg text-gray-200">
            LegalAI helps you navigate complex legal systems effortlessly.
            Connect, explore, and simplify.
          </h3>
          {/* <Link
            to="/chat"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Start a Chat
          </Link> */}
          <Link
            to="/legalchat"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Start a Chat
          </Link>
          <Link
            to="/instructions"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Instructions
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative w-1/2 flex items-center justify-center">
          <div className="bg-gray-800 w-96 h-96 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-gray-900 opacity-30 animate-pulse"></div>
            <img
              src="/bot7.png"
              alt="Bot"
              className="z-10 w-2/3 h-2/3 object-contain animate-slow-bounce"
            />
            <div className="absolute bottom-[-40px] right-[-40px] bg-gray-900 p-4 rounded-xl flex items-center gap-4 shadow-lg">
              <img
                src={
                  typingStatus === "human1"
                    ? "/human1.jpeg"
                    : typingStatus === "human2"
                    ? "/human2.jpeg"
                    : "/bot.png"
                }
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <TypeAnimation
                sequence={[
                  "User 1: How can I get started?",
                  2000,
                  () => setTypingStatus("bot"),
                  "Legal AI: Click 'Start a Chat' to begin your journey!",
                  2000,
                  () => setTypingStatus("human2"),
                  "User 2: Is my data safe with LegalAI?",
                  2000,
                  () => setTypingStatus("bot"),
                  "Legal AI: Yes, we prioritize your privacy and security.",
                  2000,
                  () => setTypingStatus("human1"),
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor
                className="text-white text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-center pb-6 mt-auto">
        <img
          src="/legalAI Logo.png"
          alt="LegalAI Logo"
          className="w-16 h-16 mb-2"
        />
        <div className="flex gap-4 text-sm text-gray-200">
          <Link to="/about" className="hover:text-gray-900 transition">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-gray-900 transition">
            Privacy Policy
          </Link>
        </div>
      </footer>

      {/* Feedback Button */}
      <FeedbackButton />
    </div>
  );
};

export default Homepage;
