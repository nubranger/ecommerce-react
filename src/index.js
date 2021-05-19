import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/scss/main.scss";
import {EshopProvider} from "./context/context";


ReactDOM.render(
    <EshopProvider>
        <App/>
    </EshopProvider>
    ,
    document.getElementById('root')
);
