import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './components/context/Context.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </StrictMode>
);