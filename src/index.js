import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';//importo bootstrap y hago referencia a la carpeta qeu ocuparemos
import { BrowserRouter } from "react-router-dom";//importo Browser router que me va a ayudar a hacer el switch y Route




ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
