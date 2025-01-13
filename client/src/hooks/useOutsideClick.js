import { useEffect } from 'react';

/**
 * Hook pour détecter un clic en dehors d'un élément et appeler une fonction de fermeture.
 * @param {React.RefObject} ref - La référence de l'élément à surveiller.
 * @param {boolean} isOpen - État d'ouverture de la fenêtre.
 * @param {Function} closeWindow - Fonction pour fermer la fenêtre.
 */
const useOutsideClick = (ref, isOpen, closeWindow) => {
  useEffect(() => {
    // Fonction de gestion des clics
    const handleClickOutside = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        closeWindow();
      }
    };

    // Ajouter un écouteur d'événements
    document.addEventListener('mousedown', handleClickOutside);

    // Nettoyer l'écouteur à la fin
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isOpen, closeWindow]);
};

export default useOutsideClick;
