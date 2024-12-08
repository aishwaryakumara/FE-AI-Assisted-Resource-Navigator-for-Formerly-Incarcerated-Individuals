import React, { useState } from 'react';
import SideBar from '../components/sidebar/SideBar';
import Main from '../components/main/Main';
import './legal-chat-main/legal-chat.css';

const LegalChat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`legal-chat-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Main />
    </div>
  );
};

export default LegalChat;
