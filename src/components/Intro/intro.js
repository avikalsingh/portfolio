import React from 'react';
import  './intro.css';
import bg from '../../assets/avikal_image.jpg'; 
import btnImg from '../../assets/hiring.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
         <span className='hello'>Hello</span>
         <span className='introText'>I'm <span className='introName'>Avikal</span> <br/> Data Scientist </span>
         <p className='introPara'>I am a skilled data scientist with experience <br/> in Machine Learning</p>
         <Link><button className='btn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}> 
            <img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg"/>    
    </section>
  )
}

export default Intro