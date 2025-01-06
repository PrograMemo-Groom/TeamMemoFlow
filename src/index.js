import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
            <App/>
        </Router>
    </Provider>
);
