import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


document.addEventListener('DOMContentLoaded', () => {
  const deviceHeight = window.innerHeight;
  document.documentElement.style.setProperty('--device-height', `${deviceHeight}px`);
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
