import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
<<<<<<< HEAD
import Table from './components/about_tables';
import CheckOut from './components/chekout_section';
 
 
=======
import { BrowserRouter as Router } from 'react-router-dom';


>>>>>>> 28c706b9f67a3712ad0aefc01780af8846847339


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>    
    {/* <App /> */}
    <Table />
    <CheckOut />
=======
  <React.StrictMode>
    <Router>
      <App />
    </Router>
>>>>>>> 28c706b9f67a3712ad0aefc01780af8846847339
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
