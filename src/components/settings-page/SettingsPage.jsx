import React, { useState, useEffect } from "react";

const SettingsPage = () => {
  const [theme, setTheme] = useState("light"); // Default theme
  const [textSize, setTextSize] = useState("medium"); // Default text size

  // Apply settings globally whenever they change
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    const fontSizeMap = {
      small: "14px",
      medium: "16px",
      large: "18px",
      xl: "20px",
    };
    document.documentElement.style.fontSize = fontSizeMap[textSize];
  }, [theme, textSize]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Accessibility Settings
        </h1>

        {/* Theme Selector */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Theme Selection
          </h2>
          <label
            htmlFor="theme-selector"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Select Theme
          </label>
          <select
            id="theme-selector"
            className="w-full p-3 border rounded-lg text-gray-700"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">Blue</option>
          </select>
        </section>

        {/* Text Size Selector */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Text Size
          </h2>
          <label
            htmlFor="text-size-selector"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Adjust Text Size
          </label>
          <select
            id="text-size-selector"
            className="w-full p-3 border rounded-lg text-gray-700"
            value={textSize}
            onChange={(e) => setTextSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </section>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => alert("Settings Applied!")}
        >
          Apply Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
