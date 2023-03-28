import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import Context from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ScrollToTop />
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
