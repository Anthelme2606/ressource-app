import React, { useState, useEffect } from "react";
import hero from "../assets/images/hero.png";
import SearchResult from "../components/SearchResult";
import Search from "../components/Search";

const Hero = () => {
  const [input, setInput] = useState("");  // State pour gérer l'entrée
  const [matches, setMatches] = useState([]);  // Résultats de la recherche
  const [isMatch, setIsMatch] = useState(false);  // Indicateur de correspondance

  // Gérer les changements d'input et les résultats de recherche
  const handleSearch = (e) => {
    
    const query = e.target.value;
    
    setInput(query);  // Mettre à jour l'entrée

    const searchResults = Search(query);  
     
    setMatches(searchResults);  // Mettre à jour les résultats
    setIsMatch(searchResults.length > 0);  // Vérifier si des correspondances existent
  };

  // Texte dynamique pour l'introduction
  const words = [
    "explorer",
    "apprendre",
    "réussir",
    "créer",
    "découvrir",
    "innover",
    "grandir",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const word = words[currentIndex];
      const isTypingComplete = currentWord.length === word.length;
      const isDeletingComplete = currentWord.length === 0;

      if (isDeleting) {
        setCurrentWord((prev) => prev.slice(0, -1));
        if (isDeletingComplete) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentWord((prev) => word.slice(0, prev.length + 1));
        if (isTypingComplete) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, currentIndex, words]);

  return (
    <section className="hero">
      <SearchResult matches={matches} isMatch={isMatch} />
      <div className="hero-content">
        <div className="hero-text-left">
          <h2 className="bienvenue">
            Bienvenue sur LearnTrack, votre plateforme de ressources éducatives
          </h2>
          <p>
            Accédez à une vaste bibliothèque de ressources pédagogiques,
            incluant des documents scolaires, des sujets d'examen et des
            supports de révision dans une multitude de domaines. LearnTrack vous
            permet de partager et de découvrir du contenu éducatif, créant ainsi
            une communauté d'apprentissage collaborative où chacun peut enrichir
            ses connaissances et se préparer efficacement pour ses examens.
          </p>
        </div>
        <div className="hero-divider"></div>
        <div className="hero-text-center">
          <p className="dynamic-text">
            Nous vous aidons à <span className="typed-text">{currentWord}</span>
            <span className="cursor">|</span>
          </p>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Illustration" />
        </div>
      </div>

      <div className="hero-search-card mt-2 mb-2">
        <input
          type="text"
          className="search-bar"
          placeholder="Rechercher un document par domaine ou spécialité"
          value={input}
          onChange={handleSearch}
        />
      </div>
    </section>
  );
};

export default Hero;
