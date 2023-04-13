import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';



const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            
            <a href='https://www.instagram.com/mahesh_paul_j/' target='_blank' ><BsInstagram /></a>
        </div>
        <div>
        <a href='https://twitter.com/CityIsBetter_' target='_blank' ><BsTwitter /></a>
        </div>
        <div>
        <a href='https://github.com/CityIsBetter' target='_blank' ><AiFillGithub /></a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/mahesh-paul/' target='_blank' ><AiFillLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia