import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client'; 
import ReCAPTCHA from 'react-google-recaptcha';

import './Footer.scss';

const Footer = () => {

  document.title = "Mahesh Paul | Contact";

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [verified, setVerified] = useState(false);
  function onChange(value){
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })

  }
  return (
    <>
      <h2 className='head-text'>Take a coffee☕ & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:mahesh.paul.j@gmail.com' className='p-text'>mahesh.paul.j@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href='tel: +91 9025698209' className='p-text'>+91 9025698209</a>
        </div>
      </div>

      {!isFormSubmitted ?
        (<div className='app__footer-form app_flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className='p-text' placeholder='Your Message' value={message} name='message' onChange={handleChangeInput}></textarea>
        </div>
        <ReCAPTCHA sitekey='6LcCTV0nAAAAAORvPmpJfBnGUAXBacvmcfDXDFdk' onChange={onChange}/>
        <button type='button' className='p-text' onClick={handleSubmit} disabled={!verified}>{loading ? 'Sending' : 'Send Message'}</button>
      </div> )
      :
      (<div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>)
}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)