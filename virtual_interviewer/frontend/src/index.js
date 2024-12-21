import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import '../static/css/index.css'; 

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
