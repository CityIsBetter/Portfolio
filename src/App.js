import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { About, Footer, Header, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss';
import PreLoader from './components/PreLoader';

const App = () => {
  
  return (
    <>
    <AnimatedCursor 
      outerSize={10}
      innerSize={10}
      color='80, 90, 202'
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
        '.link'
      ]}

    />
    <PreLoader />
    <div className='app'>
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