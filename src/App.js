import React from 'react';
import logo from './logo.svg';
import './App.css';

import Router from 'route-lite';
import {useSelector} from 'react-redux';
import * as actions from './store/actions/actionTypes';
import LoginForm from './components/authentication/LoginForm';
import Home from './components/Home';
import store from './store/storeIndex';

function App() {
  console.log("App");
  
  const userToken = localStorage.getItem('userToken');
  userToken ? store.dispatch({type: actions.AUTH_SUCCESS}) : store.dispatch({type: actions.AUTH_LOGOUT});
  console.log(userToken);
  const logged = useSelector(state =>state.auth.logged);
  console.log(logged);
  return (
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
