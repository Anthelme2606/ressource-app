import React from 'react';
import { Container } from 'react-bootstrap';
import "../assets/css/components/education-card.css";
const EducationCards = () => {
  return (
    <Container>
      <div className="grid track-bg">
        <a href="#primaire" className="card card-custom card-primary">
          <div className="card-header">
            <h2 className="card-title">Primaire</h2>
            <div className="icon-container">
           <span className="icon">
            <i className="bi bi-book"></i>
           </span>

            </div>
          </div>
          <div className="arrow-container">
          <span className="direction">
            <i className="bi bi-chevron-right"></i>
           </span>
          </div>
        </a>

        <a href="#college" className="card card-custom card-college">
          <div className="card-header">
            <h2 className="card-title">Collège</h2>
            <div className="icon-container">
            <span className="icon">
            <i className="bi bi-mortarboard"></i>
           </span>
            </div>
          </div>
          <div className="arrow-container">
          <span className="direction">
            <i className="bi bi-chevron-right"></i>
           </span>
          </div>
        </a>

        <a href="#lycee" className="card card-custom card-lycee">
          <div className="card-header">
            <h2 className="card-title">Lycée</h2>
            <div className="icon-container">
            <span className="icon">
            <i className="bi bi-book-half"></i>
           </span>
            </div>
          </div>
          <div className="arrow-container">
          <span className="direction">
            <i className="bi bi-chevron-right"></i>
           </span>
          </div>
        </a>

        <a href="#universite" className="card card-custom card-university">
          <div className="card-header">
            <h2 className="card-title">Université</h2>
            <div className="icon-container">
            <span className="icon">
            <i className="bi bi-journal-text"></i>
           </span>
            </div>
          </div>
          <div className="arrow-container">
          <span className="direction">
            <i className="bi bi-chevron-right"></i>
           </span>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default EducationCards;
