import React from "react";
import { Mic, Speaker, MessageSquare, Settings, Info } from "lucide-react";

const InstructionsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">LegalAI Instructions</h1>
      
      {/* Introduction */}
      <div className="max-w-3xl text-gray-700 text-lg leading-7 mb-10">
        <p className="mb-4">
          Welcome to LegalAI! This application assists formerly incarcerated individuals by providing legal resource navigation through a conversational AI format. 
          Our system leverages advanced Retrieval-Augmented Generation (RAG) technology to deliver accurate and relevant information for critical needs such as housing, employment, and civic rights.
        </p>
      </div>

      {/* Main Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
        {/* Legal Query Assistance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Mic className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Legal Query Assistance</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Type or speak your legal question into the input field.</li>
            <li>The system retrieves validated resources tailored to your query.</li>
            <li>Refine your question further to get in-depth details.</li>
            <li>View guided steps for legal processes such as expungement or voting rights.</li>
          </ol>
        </div>

        {/* Resource Directory */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Speaker className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Resource Directory</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Access verified resources from trusted sources like government websites and nonprofit organizations.</li>
            <li>View related case studies and summaries for better context.</li>
            <li>Bookmark frequently accessed resources for quick reference.</li>
            <li>Navigate through categorized directories for employment, housing, and civic rights information.</li>
          </ol>
        </div>

        {/* Conversational Interface */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <MessageSquare className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Conversational Interface</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Engage with the AI in a chat-like format for step-by-step assistance.</li>
            <li>Ask follow-up questions to get more detailed guidance.</li>
            <li>Retrieve your chat history for continuity in your research.</li>
            <li>Receive responses with highlighted actionable information.</li>
          </ol>
        </div>

        {/* Accessibility Features */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Accessibility Features (In Progress)</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Enable screen readers for auditory assistance.</li>
            <li>Adjust text size for readability preferences.</li>
            <li>Access the interface in multiple languages.</li>
            <li>Ensure privacy with anonymized queries and no personal data storage.</li>
          </ol>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-3xl w-full bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <Info className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Pro Tips</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Be specific in your queries for more accurate responses.</li>
          <li>Explore related topics suggested by the AI for comprehensive understanding.</li>
          <li>Bookmark important resources for quick future access.</li>
          <li>Ensure microphone permissions are enabled for voice input functionality.</li>
          <li>Utilize the directory for structured legal information access.</li>
        </ul>
      </div>

      {/* Footer Note */}
      <footer className="text-center text-sm text-gray-600 max-w-3xl">
        <p className="mb-2">
          <strong>Note:</strong> This tool provides legal resources and information but is not a substitute for professional legal advice.
        </p>
        <p>
          For optimal performance, use a recent version of Chrome or Safari.
        </p>
      </footer>
    </div>
  );
};

export default InstructionsPage;
