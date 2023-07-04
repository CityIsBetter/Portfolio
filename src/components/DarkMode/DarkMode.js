import React from 'react';
import './DarkMode.css';
import switch_on from '../../assets/switch-on.mp3';
import switch_off from '../../assets/switch-off.mp3';

const audioOn = new Audio(switch_on);
const audioOff = new Audio(switch_off);

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
        console.log('dark');
        audioOff.play();
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
        localStorage.setItem('selectedTheme', 'light');
        console.log('light');
        audioOn.play();  
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
            <input id='toggle' type="checkbox" onChange={toggleTheme} defaultChecked={selectedTheme === 'dark'}/>
            <span class="slider"></span>
        </label>
  )
}

export default DarkMode;
