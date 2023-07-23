import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { About, Footer, Header, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      color='49, 59, 172'
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
      ]}

    />
    <div className='app'>
    <Navbar />
      <div id='progress'>
        <span id='progress-val'>↑</span>
      </div>
      <div className='page'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Header />}/>
          <Route path='/home' element={<Header />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/works' element={<Works />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/contact' element={<Footer />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
    </>
  )
}

export default App;