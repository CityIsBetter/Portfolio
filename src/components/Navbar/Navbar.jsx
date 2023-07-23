import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'works', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div/>
            <a href={`/${item}`}>{item}</a>
          </li>
        ))}
        <li id='theme_toggle'> <DarkMode /> </li>
      </ul>
      <div className='app__navbar-menu'>
        <label class="burger" for="burger">
          <input type="checkbox" id="burger" onClick={() => setToggle(!Toggle)} />
          <span></span>
          <span></span>
          <span></span>
        </label>

        {Toggle && (
          <motion.div
            whileInView={{ x: [300,0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <ul>
            {['home', 'about', 'works', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <a href={`/${item}`} onClick={() => {
              setToggle(false);
              document.getElementById('burger').click();
              }}>{item}</a>
          </li>
        ))}
        <li id='theme_toggle'> <DarkMode /> </li>
        </ul>
          </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar