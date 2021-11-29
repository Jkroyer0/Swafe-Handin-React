import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ServiceContext, getContext } from './services/ServiceContext';
import Client from './pages/Client';
import Manager from './pages/Manager';
import Trainer from './pages/Trainer';

ReactDOM.render(
  <React.StrictMode>
    <ServiceContext.Provider value={getContext()}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/client" element={<Client />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>
    </Router>
    </ServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
