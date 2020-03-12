import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './firebase';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import store from './store/storeIndex';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css'; // If Bootstrap is not working, import this file!

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

const root = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
</Provider>
, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
