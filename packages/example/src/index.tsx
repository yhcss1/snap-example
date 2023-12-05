import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { initSentry } from './sentry';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

initSentry();

ReactDOM.render(

  <BrowserRouter>
    <Router />
  </BrowserRouter>
  ,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
