import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "gifttab-28a5c.firebaseapp.com",
    databaseURL: "https://gifttab-28a5c.firebaseio.com",
    projectId: "gifttab-28a5c",
    storageBucket: "gifttab-28a5c.appspot.com",
    messagingSenderId: "145075674475",
    appId: "1:145075674475:web:ab79257f10d2999140402e",
    measurementId: "G-KB7NL6YL4M"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;