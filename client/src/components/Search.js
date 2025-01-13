import React from "react";
import Dictionnaire from "../partials/dictionnaire";
import Fuse from "fuse.js";

const Search = (input) => {
  // Valider le dictionnaire
  if (!Array.isArray(Dictionnaire) || Dictionnaire.length === 0) {
    console.error("Le dictionnaire est vide ou mal formaté.");
    return [];
  }

  // Valider l'entrée utilisateur
  if (typeof input !== "string" || input.trim() === "") {
    console.error("L'entrée de recherche doit être une chaîne non vide.");
    return [];
  }

  // Options de Fuse.js
  const options = {
    keys: ["type", "matiere", "annee"],
    threshold: 0.4, // Tolérance des fautes ou correspondances partielles
    findAllMatches: true,
  };

  const fuse = new Fuse(Dictionnaire, options);

  // Tokenizer : diviser l'entrée utilisateur en mots-clés
  const keywords = input.toLowerCase().split(/\s+/); // Diviser par espaces
  let combinedResults = new Set();

  // Recherche pour chaque mot-clé
  keywords.forEach((keyword) => {
    const results = fuse.search(keyword);
    results.forEach((result) => combinedResults.add(result.item)); // Ajouter les résultats uniques
  });

  // Retourner les résultats consolidés sous forme de tableau
  return Array.from(combinedResults);
};

export default Search;
