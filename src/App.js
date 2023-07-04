import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { About, Footer, Header, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss';
import PreLoader from './components/PreLoader';

const App = () => {

  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos>100){
      scrollProgress.style.display = "grid";
    }
    else{
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#313bac ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  
  return (
    <>
    <AnimatedCursor 
      outerSize={10}
      innerSize={10}
      color='255, 255, 255'
      outerStyle={{
        mixBlendMode: 'difference',
        background: '#edf2f8'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'input[type="checkbox"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'img'
      ]}

    />
    <PreLoader />
    <div className='app'>
      <div id='progress'>
        <span id='progress-val'>↑</span>
      </div>
      <Navbar />
      <Header />
      <About /> 
      <Works />
      <Skills />
      <Footer />
    </div>
    </>
  )
}

export default App;