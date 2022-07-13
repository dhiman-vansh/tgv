import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import Navcomp from './Homecomp/Navcomp';
import NewFoot from './Homecomp/NewFoot';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navcomp />
      <App />
      <NewFoot />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
