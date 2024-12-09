import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const SideBar = () => {
    // State to manage the sidebar's expanded/collapsed state
    const [extended, setExtended] = useState(false);
    // const { startNewChat } = useContext(Context);

    // Extracting variables and functions from the Context
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

    // Method to load a recent prompt
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    const handleNewChat = async () => {
        await startNewChat(); // Start a new chat
      };

    return (
        <div className={`sidebar ${extended ? "sidebar-extended" : "sidebar-collapsed"}`}>
            <div className="sidebar-top">
                {/* Toggle Button */}
                <img
                    onClick={() => setExtended((prev) => !prev)}
                    className="menu"
                    src={assets.menu_icon}
                    alt="Toggle Menu"
                />

                {/* New Chat */}
                {/* <div onClick={handleNewChat} className="new-chat"> */}
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="New Chat Icon" />
                    {extended && <p>New Chat</p>}
                </div>

                {/* Recent Prompts */}
                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => loadPrompt(item)}
                                className="recent-entry"
                            >
                                <img src={assets.message_icon} alt="Message Icon" />
                                <p>{item.slice(0, 20)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="sidebar-bottom">
                {/* Help */}
                <div className="bottom-item">
                    <img src={assets.question_icon} alt="Help Icon" />
                    {extended && <p>Help</p>}
                </div>

                {/* Activity */}
                <div className="bottom-item ">
                    <img src={assets.history_icon} alt="Activity Icon" />
                    {extended && <p>Resource Directory</p>}
                </div>

                {/* Settings */}
                <div className="bottom-item">
                    <img src={assets.setting_icon} alt="Settings Icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
