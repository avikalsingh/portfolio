import React from 'react';
import './skills.css';
import DataScience from '../../assets/datascience.png';
import ML from '../../assets/machine-learning.png';
import SoftwareDev from '../../assets/soft-development.png';

const skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
        I am a Data Scientist and Software Engineer skilled in developing intelligent, scalable solutions.
        My expertise spans data analytics, machine learning, and full-stack development, turning raw data
        into actionable insights and real-world applications.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={DataScience} alt="Data Science" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Data Science & Analytics</h2>
                    <p>Experienced in data wrangling, statistical modeling, and visualization using Python, SQL,
                    and Tableau, delivering insights that improve decision-making and business outcomes.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ML} alt="Machine Learning" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Machine Learning & AI</h2>
                    <p>Skilled in building deep learning and NLP models using PyTorch, TensorFlow, and scikit-learn.
                    Focused on model interpretability, deployment, and real-world healthcare applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={SoftwareDev} alt="Software Development" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Software Development</h2>
                    <p>Proficient in developing scalable backend systems and web apps with React, Node.js, and Django.
              Adept in version control (Git) and cloud platforms such as AWS.</p>
                </div>
            </div>
            <div className="techStack">
                <h3>Tech Stack</h3>
                <p>Python • SQL • PyTorch • TensorFlow • Django • React • Node.js • AWS • Tableau • PowerBI </p>
            </div>
        </div>
    </section>
  )
}

export default skills;