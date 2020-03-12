import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Router from 'route-lite';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from './store/actions/actionTypes';
import {checkAdBlocks} from './store/actions/adsAction';
import LoginForm from './components/authentication/LoginForm';
import Home from './components/Home';
import store from './store/storeIndex';

function App() {
  console.log("App");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(checkAdBlocks())
  //   window.location = "https://www.google.com"
  // })
  
  const userToken = localStorage.getItem('userToken');
  userToken ? store.dispatch({type: actions.AUTH_SUCCESS}) : store.dispatch({type: actions.AUTH_LOGOUT});
  console.log(userToken);
  const logged = useSelector(state =>state.auth.logged);
  console.log(logged);
  return (
    // <div>

    // </div>
    <div className="App">
      <header className="App-header">
        <Router>
          {(userToken || logged) ? <Home/> : <LoginForm />}
        </Router>
      </header>
    </div>
  );
}

export default App;
