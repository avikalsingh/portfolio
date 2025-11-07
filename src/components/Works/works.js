import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const works = () => {
  // return (
  //   <section id="works">
  //       <h2 className="worksTitle">My Portfolio</h2>
  //       <span className="worksDesc">Here are some of my recent works. I have worked on a variety of projects ranging from web design to mobile app development. Each project showcases my skills and creativity in different ways.</span>
  //       <div className="worksImgs">
  //           <img src={Portfolio1} alt="" className="worksImg"/>
  //           <img src={Portfolio2} alt="" className="worksImg"/>
  //           <img src={Portfolio3} alt="" className="worksImg"/>
  //           <img src={Portfolio4} alt="" className="worksImg"/>
  //           <img src={Portfolio5} alt="" className="worksImg"/>
  //           <img src={Portfolio6} alt="" className="worksImg"/>
  //       </div>
  //       <button className="workBtn">See More</button>
  //   </section>
  // )
  const projects = [
    {
      id: 1,
      title: "🩺 Clinical Imaging Assistant",
      description: "Multimodal deep learning system combining BioMedCLIP vision encoder and Clinical-T5 for chest X-ray disease classification and radiology report generation using MIMIC-CXR dataset.",
      techStack: ["PyTorch", "BioMedCLIP", "Clinical-T5", "Transformers", "OpenCLIP", "MIMIC-CXR"],
      metrics: [
        { label: "F1 Score", value: "0.9832" },
        { label: "ROUGE-L", value: "0.3125" },
        { label: "BERTScore", value: "0.8704" }
      ],
      github: "https://github.com/avikalsingh/monai/blob/main/Clinical%20T5-3%20(3).ipynb",
      liveDemo: null,
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "📊 Tweet Analytics for Disaster Management",
      description: "Deployed NLP pipeline for disaster tweet classification to aid emergency response.",
      techStack: ["Python", "TensorFlow", "Tweepy", "Flask"],
      metrics: [
        { label: "Accuracy", value: "94%" },
        { label: "API Latency", value: "< 200ms" }
      ],
      github: "https://github.com/avikalsingh/Tweet-Analytics-for-Disaster-Calamity-Management",
      liveDemo: "https://tweet-analytics-for-disaster-calamity-management.streamlit.app/",
      category: "NLP"
    },
    {
      id: 3,
      title: "💼 Digital HR Management System",
      description: "Full-stack enterprise HR solution with employee management, payroll automation, and analytics dashboard.",
      techStack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
      metrics: [
        { label: "Users", value: "500+" },
        { label: "Uptime", value: "99.8%" }
      ],
      github: "https://github.com/avikalsingh/Digital-HR/",
      liveDemo: "https://avikalsingh.pythonanywhere.com/",
      category: "Full-Stack"
    },
    {
      id: 4,
      title: "🍷 Wine Quality Prediction Model",
      description: "ML model predicting wine quality based on physicochemical properties with explainable AI insights.",
      techStack: ["Scikit-learn", "Pandas", "SHAP", "Streamlit"],
      metrics: [
        { label: "Accuracy", value: "92%" },
        { label: "Features", value: "11" }
      ],
      github: "https://github.com/avikalsingh/Predictive-Analysis-on-Wine-Quality-Assessment-/",
      liveDemo: null,
      category: "Data Science"
    },
    {
      id: 5,
      title: "📈 ETL Data Pipeline",
      description: "Scalable data pipeline processing 100k+ records daily with automated quality checks and monitoring.",
      techStack: ["Apache Airflow", "Python", "Docker", "PostgreSQL"],
      metrics: [
        { label: "Records/Day", value: "119k" },
        { label: "Processing", value: "Real-time" }
      ],
      github: "https://github.com/avikalsingh",
      liveDemo: null,
      category: "Data Engineering"
    },
    {
      id: 6,
      title: "🌐 Personal Portfolio Website",
      description: "Modern, responsive portfolio built with React featuring smooth animations, contact forms, and reCAPTCHA integration.",
      techStack: ["React", "EmailJS", "Vercel", "CSS3"],
      metrics: [
        { label: "Lighthouse", value: "95+" },
        { label: "Load Time", value: "< 2s" }
      ],
      github: "https://github.com/avikalsingh/portfolio",
      liveDemo: "https://avikalsingh.vercel.app/",
      category: "Web Development"
    }
  ];

  return (
    <section id="works">
      <div className="worksContainer">
        <h2 className="worksTitle">Projects</h2>
        <span className="worksDesc">
          Here are some of my recent projects showcasing expertise in machine learning, 
          data engineering, and full-stack development. Each project demonstrates 
          real-world impact with quantified results.
        </span>
        
        <div className="projectsGrid">
          {projects.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="projectCategory">{project.category}</div>
              
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDesc">{project.description}</p>
                
                <div className="techStack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="techBadge">{tech}</span>
                  ))}
                </div>
                
                <div className="projectMetrics">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="metric">
                      <span className="metricValue">{metric.value}</span>
                      <span className="metricLabel">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="projectLinks">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="projectLink github"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="projectLink demo"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <a 
          href="https://github.com/avikalsingh" 
          target="_blank" 
          rel="noreferrer" 
          className="workBtn"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default works