
import React from 'react';
import ReactDOM from 'react-dom/client';
window.React = React
import App from './App';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import { Context } from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context> 
);