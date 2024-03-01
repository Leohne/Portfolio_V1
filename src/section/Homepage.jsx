import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => {
  const text = "Developpeur Front-end."
    const [displayedText, setDisplayedText] = useState('');
    const windowHeight = window.innerHeight;
    const middlePosition = windowHeight / 2;  

    useEffect(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
        if (currentIndex > text.length) {
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }, [text]);
    
gsap.registerPlugin(ScrollTrigger);

// Configurer l'animation pour masquer .textanim
gsap.to(".textanim, .flecheBas", {
  opacity: -.5, // Masquer l'élément en le rendant transparent
  scrollTrigger: {
    trigger: ".present_div", // Déclencher l'animation lorsque la section est visible
    start: "top center", // Début de l'animation lorsque la section atteint le centre de la fenêtre
    end: () => `top+=${middlePosition} center`, // Fin de l'animation lorsque la section quitte le centre de la fenêtre
    scrub: true, // Pour une animation en douceur pendant le défilement
    toggleActions: "play none none reverse" // Jouer l'animation lorsque la section entre, inverser lorsque la section sort
  }
});
  
    return (
      <div className="accueil">
      <div className="textanim">
        <h1>{displayedText}</h1>
      </div>
      <FontAwesomeIcon icon="fa-solid fa-arrow-down" className="flecheBas fa-3x" />
      </div >
    );
  };

export default Homepage 