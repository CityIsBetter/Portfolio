import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {

  document.title = "Mahesh Paul | Portfolio";

  return (
    <>
    <div className='sliding-text'>Tech Enthusiast • Student • Developer • Tech Enthusiast • Student • Developer</div>
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Mahesh Paul</h1>
            </div>
          </div>
        </div> 
      </motion.div>

      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className='app__header-img'
      >
        <img src={images.profile} alt='profile_bg'/> 
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration: 1, ease:'easeInOut'}}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className='app__header-circles'
      >
        {[images.javascript, images.html, images.react].map((circle, index)=>(
          <motion.div whileHover={{scale: 1.1}} className='circle-cmp app_flex' key={`circle-${index}`}>
            <span></span>
            <span></span>
            <span></span>
            <img src={circle} alt='circle' />
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  )
}

export default AppWrap(Header, 'home');