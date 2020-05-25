import React from 'react';
import './App.css';
const App = () => {

  const yesterdayDate = localStorage.getItem('yesterdayDate');
    if (yesterdayDate) {
       var yesterday = new Date(yesterdayDate);
        //Verify if is the next day
        const now = new Date();
        if(now.getTime() / 1000 - yesterday.getTime()/1000 > 86400){
          console.log('its the next day');
          localStorage.setItem('yesterdayDate', new Date())
          let imageNumber = localStorage.getItem('imageNumber')

          if(localStorage.getItem('imageNumber') === '15'){
            localStorage.setItem('imageNumber', 1)
          }else{
            imageNumber++
            localStorage.setItem('imageNumber', imageNumber)
          }
        }
        
    } else {
        localStorage.setItem('yesterdayDate', new Date())
        localStorage.setItem('imageNumber', 1)
    }

  return (
    <div>
      <img className="backgroundImage " src={require('./img/background/joao_lopes_' + localStorage.getItem('imageNumber') + '.JPG')} alt="background" />
      <iframe title="TabFund" src="http://localhost:3000//">
        <p>Your browser does not support iframes.</p>
      </iframe>
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
