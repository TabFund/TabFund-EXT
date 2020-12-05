import React, { useEffect } from 'react';
import './App.css';
import $ from "jquery"
const App = () => {

  const loadingIframe = () => {
    document.getElementById('iframe').style.visibility = 'visible'
    // document.getElementById('iframe').style.display = 'none'
  }

  return (
    <div>
      <iframe id='iframe' onLoad={() => { loadingIframe() }} title="TabFund" src="http://localhost:3000/">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );

}

export default App;
