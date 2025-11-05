import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import LinkedInIcon from '../../assets/LI-In-Bug.png';
import GitHubIcon from '../../assets/github-mark-white.png';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bdi2tle', 'template_s4c98bh', form.current, 'IJE41ciYPQdchAgPv')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
              I have had the privilege of working with some amazing clients over the years. Here are a few of them:
            </p>
            <div className="clientImgs">
              <img src={Walmart} alt="Client" className='clientImg'/>
              <img src={Adobe} alt="Client" className='clientImg'/>
              <img src={Microsoft} alt="Client" className='clientImg'/>
              <img src={Facebook} alt="Client" className='clientImg'/>
            </div>
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Get In Touch</h1>
            <span className='contactDesc'> Please fill out the form below to discuss any work opportunities. </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder='Your Name' className='name' name='your_name'/>
              <input type="email" placeholder='Your Email' className='email' name='your_email'/>
              <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
              <button type='submit' value="Send" className='submitBtn'>Submit</button>
              <div className="links">
                <a href="https://linkedin.com/in/avikal-singh-079ab8184" target="_blank" rel="noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className='link'/>
                </a>
                <a href="https://github.com/avikalsingh" target="_blank" rel="noreferrer">
                <img src={GitHubIcon} alt="GitHub" className='link'/>
                </a>
              </div>
            </form> 
        </div>
    </section>
  )
}

export default Contact