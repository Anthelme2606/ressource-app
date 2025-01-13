import React from 'react';
import "../assets/css/components/search-result.css";

const SearchResult = ({ matches, isMatch }) => {
  if (!isMatch || !matches || matches.length === 0) {
    return null; // Aucun résultat à afficher
  }

  return (
    <div className="search-result-popup">
      <div className="card-container-search">
        <div className="card-header text-black">Résultats de la Recherche</div>
        <div className="course-list">
          {matches.map((match, index) => {
            if (!match) {
              // Ignorez les résultats invalides
              return null;
            }

            const item = match;
            
            return (
              <div key={index} className="course-item">
                <div className="course-icon">
                  {item.icon ? item.icon: <i className="bi bi-book"></i>}
                </div>
                <div className="course-details">
                  <span className="type">
                    Type : {item.type || "Non spécifié"}
                  </span>
                  <span className="mat">
                    Matière : {item.matiere || "Non spécifié"}
                  </span>
                </div>
                <div className="course-meta">
                  <div className="meta-item">
                    <i className="bi bi-chat"></i> {item.comments || 0}
                  </div>
                  <div className="meta-item">
                    <i className="bi bi-hand-thumbs-up"></i> {item.likes || 0}
                  </div>
                  <div className="meta-item flag">
                    <i className="bi bi-flag"></i> {item.flags || 0}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
