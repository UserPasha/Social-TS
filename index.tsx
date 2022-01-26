import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, NavLink} from "react-router-dom";
import StateOfSoc from './Redux/stateOfSoc'



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App  profilePage={StateOfSoc.profilePage} dialogsPage={StateOfSoc.dialogsPage}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
