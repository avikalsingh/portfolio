import React, { useRef } from 'react';
import './contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
import LinkedInIcon from '../../assets/LI-In-Bug.png';
import GitHubIcon from '../../assets/github-mark-white.png';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaToken, setCaptchaToken] = useState(null);

  const onCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if reCAPTCHA is completed
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    // Add reCAPTCHA token to form params
    const params = {
      your_name: e.target.your_name.value,
      your_email: e.target.your_email.value,
      message: e.target.message.value,
      'g-recaptcha-response': captchaToken,
    };

    emailjs.send('service_bdi2tle', 'template_s4c98bh', params, 'IJE41ciYPQdchAgPv')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          recaptchaRef.current.reset();
          setCaptchaToken(null);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className='contactPageTitle'>Get In Touch</h1>
            <span className='contactDesc'> Please fill out the form below to discuss any work opportunities. </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder='Your Name' className='name' name='your_name' required/>
              <input type="email" placeholder='Your Email' className='email' name='your_email' required/>
              <textarea name="message" rows="5" placeholder='Your Message' className='msg' required></textarea>
              
              {/* Add reCAPTCHA here */}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LfxCQQsAAAAAIqI7ZQjsJevVuteOR2RlxYm9MH2"
                onChange={onCaptchaChange}
                theme="dark"
              />

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

export default Contact;