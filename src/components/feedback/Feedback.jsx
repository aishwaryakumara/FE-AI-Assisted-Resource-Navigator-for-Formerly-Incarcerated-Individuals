import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Feedback Button with Icon */}
      <button
        onClick={toggleModal}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
      >
        <FontAwesomeIcon icon={faComments} size="lg" />
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">We Value Your Feedback</h2>
            <form>
              {/* Interface Issues */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Did you encounter any issues with the interface or navigation while using the website?
                </label>
                <div className="flex justify-between items-center mb-2">
                  <span>1</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    className="w-full"
                  />
                  <span>5</span>
                </div>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                  placeholder="Describe any issues here..."
                ></textarea>
              </div>

              {/* AI Response */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Did the AI provide accurate and helpful responses to your queries?
                </label>
                <div className="flex justify-between items-center mb-2">
                  <span>1</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    className="w-full"
                  />
                  <span>5</span>
                </div>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                  placeholder="Describe any issues here..."
                ></textarea>
              </div>

              {/* Privacy/Security Concerns */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you have any concerns regarding the privacy or security of your data while using this platform?
                </label>
                <textarea
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                  placeholder="Share your concerns here..."
                ></textarea>
              </div>

              {/* Submit Feedback */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackButton;
