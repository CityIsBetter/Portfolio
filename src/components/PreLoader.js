import React, { useEffect } from 'react';
import './PreLoader.css';
import { PreLoaderAnim } from '../animations/index.js';

const PreLoader = () => {
    useEffect(()=>{
        PreLoaderAnim()
    },[]);

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Student , </span>
            <span>Developer , </span>
            <span>Tech Enthusiast . </span>
        </div>
    </div>
  )
}

export default PreLoader