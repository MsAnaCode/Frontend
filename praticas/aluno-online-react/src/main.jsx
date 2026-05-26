<<<<<<< feature/pratica07
import React from 'react';
import { StrictMode } from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; 
import { AuthProvider } from './contexts/AuthContext.jsx';
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
>>>>>>> develop

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< feature/pratica07
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
=======
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
>>>>>>> develop
