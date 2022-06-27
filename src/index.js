import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <App saludo="Holis dice Daniel" >
    <h1> Soy un hijo</h1>
  </App>
);

