import React from 'react';
import './DarkMode.css';

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
        localStorage.setItem('selectedTheme', 'light');
    }

    const selectedTheme = localStorage.getItem('selectedTheme');
    
    if(selectedTheme === 'dark'){
        setDarkMode();
    }

    const toggleTheme = e => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }
  return (
        <label class="switch">
            <input id='toggle' type="checkbox" onChange={toggleTheme} defaultChecked={selectedTheme === 'dark'} />
            <span class="slider"></span>
        </label>
  )
}

export default DarkMode;
