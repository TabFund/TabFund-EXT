import React, { useEffect } from 'react';
import './App.css';
import $ from "jquery"
const App = () => {

  // useEffect(() => {
  //   resize();
  //   window.addEventListener('resize', resize)
  // })

  const yesterdayDate = localStorage.getItem('yesterdayDate');
  if (yesterdayDate) {
    var yesterday = new Date(yesterdayDate);
    //Verify if is the next day
    const now = new Date();
    if (now.getTime() / 1000 - yesterday.getTime() / 1000 > 86400) {
      console.log('its the next day');
      localStorage.setItem('yesterdayDate', new Date())
      let imageNumber = localStorage.getItem('imageNumber')

      if (localStorage.getItem('imageNumber') === '14') {
        localStorage.setItem('imageNumber', 1)
      } else {
        imageNumber++
        localStorage.setItem('imageNumber', imageNumber)
      }
    }

  } else {
    localStorage.setItem('yesterdayDate', new Date())
    localStorage.setItem('imageNumber', 1)
  }

  // const resize = () => {
  //   var width = window.innerWidth;
  //   var height = window.innerHeight;

  //   var outer = document.getElementById("outer");
  //   var wrap = document.getElementById("wrap");
  //   var maxWidth = outer.clientWidth;
  //   var maxHeight = outer.clientHeight;

  //   var scale = 1;

  //   scale = Math.min(width / maxWidth, height / maxHeight);

  //   wrap.style.width = maxWidth * scale + "px";
  //   wrap.style.height = maxHeight * scale + "px";

  //   outer.style.transform = "scale(" + scale + ")";

  //   var topPadding = (height - wrap.clientHeight) / 2;
  //   wrap.style.paddingTop = topPadding + "px";
  // }

  return (
    <div>
      <img className="backgroundImage " src={require('./img/background/joao_lopes_' + localStorage.getItem('imageNumber') + '.JPG')} alt="background" />
      <iframe title="TabFund" src="https://extension.tab.fund">
        <p>Your browser does not support iframes.</p>
      </iframe>
      {/* <div id="wrap">
        <div id="outer">
          <iframe title="TabFund" src="http://localhost:3000//">
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>

      </div> */}
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

// var maxWidth = $('#outer').width();
// var maxHeight = $('#outer').height();

// $(window).resize(function (evt) {
//   var $window = $(window);
//   var width = $window.width();
//   var height = $window.height();
//   var scale;

//   // early exit
//   if (width >= maxWidth && height >= maxHeight) {
//     $('#outer').css({ '-webkit-transform': '' });
//     $('#wrap').css({ width: '', height: '' });
//     return;
//   }

//   scale = Math.min(width / maxWidth, height / maxHeight);

//   $('#outer').css({ '-webkit-transform': 'scale(' + scale + ')' });
//   $('#wrap').css({ width: maxWidth * scale, height: maxHeight * scale });
// });

export default App;
