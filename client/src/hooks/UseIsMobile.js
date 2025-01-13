import { useState, useEffect } from "react";

// Hook personnalisé pour détecter si l'écran est mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

   
    checkIfMobile();

 
    window.addEventListener("resize", checkIfMobile);

    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
