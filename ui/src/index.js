import React, { Suspense } from 'react';

// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import store from './redux/store'

import './index.css';

import App from './App';

ReactDOM.render(
    <Suspense fallback="loading">
        <App />
    </Suspense>,
    document.getElementById("root")
);