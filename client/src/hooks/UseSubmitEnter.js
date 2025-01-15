import { useEffect } from 'react';

const useSubmitOnEnter = (onSubmit) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Empêche le comportement par défaut de la touche ENTER (éviter un saut de ligne)
        onSubmit(event); // Appelle la fonction de soumission en lui passant l'événement
      }
    };

    // Ajout de l'événement keydown au document
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup pour retirer l'événement lorsque le composant est démonté
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onSubmit]); // L'effet se déclenche chaque fois que `onSubmit` change
};

export default useSubmitOnEnter;
