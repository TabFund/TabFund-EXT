import React, {useEffect, useState} from 'react';
import firebase from './firebase';
import logo from './logo.svg';
import './App.css';

import Router from 'route-lite';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from './store/actions/actionTypes';
import {checkAdBlocks} from './store/actions/adsAction';
import { goTo } from 'route-lite';
import LoginForm from './components/authentication/LoginForm';
import Home from './components/Home';
import store from './store/storeIndex';

const App = () => {
  console.log("App");

  const dispatch = useDispatch();
  // const [token, setToken] =  useState(false)
  
  useEffect(() => {
    // dispatch(checkAdBlocks())
    window.location = "http://localhost:3000/"
    // const userToken = localStorage.getItem('userToken');
    // if (userToken) {
    //   store.dispatch({type: actions.AUTH_SUCCESS}) 
      
    // } else{
    //   store.dispatch({type: actions.AUTH_LOGOUT});
      
    // } 
    // console.log("userToken : " + userToken);
  })
  

  const logged = useSelector(state =>state.auth.logged);
  console.log("logged : " + logged);
  


  return (
    <div>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <Router>
    //       {logged ? goTo(Home) : goTo(LoginForm)}
    //     </Router>
    //   </header>
    // </div>
  );
}

export default App;
