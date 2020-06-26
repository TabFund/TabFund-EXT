import React from 'react';
import { ReactDOM, hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css'; // If Bootstrap is not working, import this file!



const initApp = () => {
        require('./index.css')
        const rootElement = document.getElementById('root')
        if (rootElement && rootElement.hasChildNodes()) {
                hydrate(<App />, rootElement, () => { })
        } else {
                render(<App />, rootElement)
        }
}

initApp()

// ReactDOM.render(
//         <App />
// , root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
