import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "ELEPHAS BIO SCIENCES",
      position: "Data Science Intern",
      date: "May 2024 – Present",
      details: [
        "Utilizing MPM data to analyze medical immunology treatment performance.",
        "Implementing PCA for dimensionality reduction and custom binning.",
        "Experimenting with feature selection techniques like Recursive Feature Elimination with Random Forest and Gradient Boosting.",
        "Using Azure Auto-ML for data preprocessing and Ensemble models for feature selection.",
        "Performing Data analysis on cytokine data to analyze protein level response.",
        "Applying various clustering techniques on assay sample's response to drugs."
      ]
    },
    {
      company: "HONEYWELL",
      position: "Data Science Intern",
      date: "May 2023 – Aug 2023",
      details: [
        "Utilized MS SQL Server to analyze industrial repair solutions data.",
        "Employed SAS for advanced statistical analysis and predictive modeling.",
        "Implemented LSTM models for demand forecasting in critical sensor markets.",
        "Leveraged Falcon 7B LLM for a responsive answering system in customer support."
      ]
    },
    {
      company: "TRENDS Lab (GEORGIA TECH UNIVERSITY)",
      position: "Machine Learning Research Assistant - Healthcare",
      date: "Aug 2022 – Apr 2024",
      details: [
        "Researched ICA and brain disorders using fMRIs Functional Connectivity.",
        "Built LSTM model for classification of Alzheimer's and Schizophrenia on rs-fMRI Time Series.",
        "Developed U-Net model with ImageNet encoders for mammographic images.",
        "Accepted paper at OHBM 2023 Canada."
      ]
    },
    {
      company: "ACCENTURE",
      position: "Senior Data Scientist",
      date: "Jun 2021 – Jul 2022",
      details: [
        "Developed regression models for patient recovery time and Customer Lifetime Value prediction.",
        "Implemented ETL pipelines using Azure Data Factory and Azure Data Lake Storage Gen2.",
        "Developed and deployed GLMs and XGBoost models for claim cost prediction.",
        "Integrated BERT-based NLP models for medical code extraction from physician notes."
      ]
    },
    {
      company: "TECHCITI TECHNOLOGIES",
      position: "Data Scientist",
      date: "Nov 2019 – Jun 2021",
      details: [
        "Developed a personalized news recommendation system using collaborative filtering.",
        "Managed ETL workflows with Apache Airflow and utilized Apache Spark for model training.",
        "Implemented real-time data streaming using Azure Event Hubs.",
        "Conducted A/B testing to optimize recommendation strategies."
      ]
    }
  ];

  return (
    <div className="App">
      <header style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="header-content">
          <h1>Tharun Kumar Bandaru</h1>
          <p>Data Scientist | Machine Learning Engineer | AI Enthusiast</p>
          <button className="cta-button">Explore My Work</button>
        </div>
        <div className="header-background"></div>
      </header>

      <main>
        <section id="about" className="section-dark">
          <h2>About Me</h2>
          <p>Hi, I'm Tharun. I solve complex problems using Data Science and AI...</p>
          <p>With over 4 years of experience in Healthcare and Finance industries, I've successfully developed and deployed various models including NLP, LLM, ML, GLM, Anomaly Detection, and Demand Forecasting.</p>
        </section>

        <section id="experience" className="section-light">
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.company}</h3>
              <p className="position">{exp.position}</p>
              <p className="date">{exp.date}</p>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="skills" className="section-dark">
          <h2>Skills</h2>
          <div className="skills-container">
            {['Python', 'Machine Learning', 'Data Science', 'SQL', 'ETL', 'CI/CD', 'Azure', 'AWS', 'PyTorch', 'TensorFlow', 'NLP', 'LLMs'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section-light">
          <h2>Get in Touch</h2>
          <p>Interested in collaborating? Let's connect!</p>
          <button className="cta-button">Contact Me</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Tharun Kumar Bandaru. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;