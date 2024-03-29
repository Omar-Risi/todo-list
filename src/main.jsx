import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
