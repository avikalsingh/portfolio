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
         <span className='introText'>I'm <span className='introName'>Avikal Singh <br/> </span> <span className='introTitle'> Data Scientist & Software Engineer </span></span>
         <p className='introPara'>I build intelligent, data-driven systems by combining machine learning, <br/> full-stack development, and cloud computing.</p>
         <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}><button className='btn' onClick={() => {
          document.getElementById('works').scrollIntoView({behavior: 'smooth'})
        }}> 
            <img src={btnImg} alt='Hire' className='btnImg'/>View My Work</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg"/>    
    </section>
  )
}

export default Intro