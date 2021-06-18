import React, {useState} from 'react';
import './App.css';
import $ from 'jquery';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import logo from './img/logo.png';
import usaFlag from './img/usaFlag.png';

import Home from './components/Home/Home';
import Results from './components/Results/Results';
import Speaking from './components/Speaking/Speaking';
import Error from './components/Error/Error';

function App() { 
  $(document).ready(() => { // Jquery
    
  });

  const progressBar = () => { // scroll progressBar func
    let windScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (windScroll / docHeight) * 100;
    document.getElementById("progressBar").style.width = scrolled + '%';        
  }
  window.onscroll = function () { 
    progressBar();
  }

  const[titleText, setTitleText] = useState('Dashboard'); // title text / bread crumbs text hooks
  const[linkText, setTitleLink] = useState('/'); // bread crumbs link hooks
  const dashboardFunc = () => { // dashboard title text / bread crumbs text
    setTitleText('Dashboard');
    setTitleLink('/');
    setToggle(!menuToggle);
    $('nav').animate({'left': '-100%'}).css({'overflow': 'hidden'});
    $('body').css({'overflow': 'auto'});  
    $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '});
    $('.bar2').css({'opacity': '1'});
    $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '});
    if($(window).width() >= 1024) { // for desctop
      setToggle(!menuToggle);
      $('.bar1').animate({'width': '35px'}, 50);
      $('.bar3').animate({'width': '35px'}, 50);
      $('#menuToggle').animate({'left': '6%'});
      $('.bar1').css({'backgroundColor': '#ee7100'});
      $('.bar3').css({'backgroundColor': '#ee7100'});
    }
  }
  const examResultsFunc = () => { // exam result title text / bread crumbs text
    setTitleText('Exam Results');
    setTitleLink('/results');
    setToggle(!menuToggle);
    $('nav').animate({'left': '-100%'}).css({'overflow': 'hidden'});
    $('body').css({'overflow': 'auto'}); 
    $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '});
    $('.bar2').css({'opacity': '1'});
    $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '}); 
    if($(window).width() >= 1024) { // for desctop
      setToggle(!menuToggle);
      $('.bar1').animate({'width': '35px'}, 50);
      $('.bar3').animate({'width': '35px'}, 50);
      $('#menuToggle').animate({'left': '6%'});
      $('.bar1').css({'backgroundColor': '#ee7100'});
      $('.bar3').css({'backgroundColor': '#ee7100'});
    }
  }
  const speakingFunc = () => { // speaking title text / bread crumbs text
    setTitleText('Speaking');
    setTitleLink('/speaking/main');
    setToggle(!menuToggle);
    $('nav').animate({'left': '-100%'}).css({'overflow': 'hidden'});
    $('body').css({'overflow': 'auto'});  
    $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '});
    $('.bar2').css({'opacity': '1'});
    $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '});
    if($(window).width() >= 1024) { // for desctop
      setToggle(!menuToggle);
      $('.bar1').animate({'width': '35px'}, 50);
      $('.bar3').animate({'width': '35px'}, 50);
      $('#menuToggle').animate({'left': '6%'});
      $('.bar1').css({'backgroundColor': '#ee7100'});
      $('.bar3').css({'backgroundColor': '#ee7100'});
    }
  }
  document.title = titleText; // document title text

  const[menuToggle, setToggle] = useState(false); // menu toggle hooks

   const menuToggleFunc = (e) => { // menu toggle func
    setToggle(!menuToggle);
    if(!menuToggle) {
      $('.bar1').css({'transform': 'rotate(-45deg) translate(-8px, 7px)'}).css({'backgroundColor': '#1e398f'});
      $('.bar2').css({'opacity': '0'});
      $('.bar3').css({'transform': 'rotate(45deg) translate(-8px, -8px)'}).css({'backgroundColor': '#1e398f'});
      $('nav').animate({'left': '0'}).css({'overflow': 'auto'});
      $('body').css({'overflow': 'hidden'});
    }
    else {
      $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '});
      $('.bar2').css({'opacity': '1'});
      $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'}).css({'backgroundColor': '#ee7100 '});
      $('nav').animate({'left': '-100%'}).css({'overflow': 'hidden'});
      $('body').css({'overflow': 'auto'});
    }
    if($(window).width() >= 1024) { // for desctop
      if(!menuToggle) { // menu toggle func for desctop
        $('.bar1').css({'transform': 'rotate(-45deg) translate(-4px, 0px)'}).css({'backgroundColor': '#ee7100 '}).animate({'width': '26px'}, 50);
        $('.bar2').css({'opacity': '0'});
        $('.bar3').css({'transform': 'rotate(45deg) translate(-4px, 0px)'}).css({'backgroundColor': '#ee7100 '}).animate({'width': '26px'}, 50);
        $('#menuToggle').animate({'left': '22%'});
        $('.bar1').css({'backgroundColor': '#1e398f'});
        $('.bar3').css({'backgroundColor': '#1e398f'});
      }
      else {
        $('.bar1').animate({'width': '35px'}, 50);
        $('.bar3').animate({'width': '35px'}, 50);
        $('#menuToggle').animate({'left': '6%'});
        $('.bar1').css({'backgroundColor': '#ee7100'});
        $('.bar3').css({'backgroundColor': '#ee7100'});
      }
    }
   }


  return (
    <div className="App">
      <BrowserRouter>
      {/*-------Header--------*/}
      <div id="progressBar"></div>
      <header>
        <div className="userInfo">
          <div className="flagImg"><img src={usaFlag} height="20px" /></div>
          <div className="welcomeName">Hi, <span className="userFullName"><span className="userName">Murray</span> <span className="userLastName">Imanych</span></span></div>
          <div className="userImg">M</div>
        </div>
        <div id="menuToggle" onClick={menuToggleFunc}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </header>


      {/*-------Navigation--------*/}
      <nav>
        <div className="navWrap">
            <Link to="/" onClick={dashboardFunc}><img src={logo} width="150px" height="45px"/></Link>
            <ul>
              <Link to="/" onClick={dashboardFunc}><li><i className="fas fa-home"></i><span>Dashboard</span></li></Link>
              <Link to="/results" onClick={examResultsFunc}><li><i className="fas fa-poll"></i><span>Exam Results</span></li></Link>
              <Link to="/speaking/main" onClick={speakingFunc}><li><i className="fas fa-microphone"></i><span>Speakings</span></li></Link>
            </ul>
        </div>
      </nav>

      {/*-------Main--------*/}
      <main>
        <div className="breadCrumbs">
          <p className="breadCrumbsMainTitle">{titleText}</p>
          <i className="fas fa-home"></i>
          <ul>
            <li><Link to={linkText}>{titleText}</Link></li>
          </ul>
        </div>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/speaking/main" component={Speaking} />
          <Route path="*" component={Error} />
        </Switch>
      </main>
      </BrowserRouter>

      {/*-------Footer--------*/}

    </div>
  );
}

export default App;
