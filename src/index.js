import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppMain from './AppMain';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppMain />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
