import React from 'react';
import {FaHackerrank} from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';



const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href='https://www.hackerrank.com/mahesh_paul_j' target='_blank' rel="noreferrer"><FaHackerrank /></a>
        </div>
        <div>
        <a href='https://www.instagram.com/mahesh_paul_j/' target='_blank' rel="noreferrer"><BsInstagram /></a>
        </div>
        <div>
        <a href='https://twitter.com/CityIsBetter_' target='_blank' rel="noreferrer"><BsTwitter /></a>
        </div>
        <div>
        <a href='https://github.com/CityIsBetter' target='_blank' rel="noreferrer"><AiFillGithub /></a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/mahesh-paul/' target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia