import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
  document.body.className = temaSalvo;
}


const idiomaCookie = document.cookie.match(/(^|;) ?idioma=([^;]*)(;|$)/);
if (!idiomaCookie) {
  document.cookie = "idioma=pt";
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
