import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./backToTop.scss";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher le bouton lorsque la page est défilée jusqu'à 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajouter un écouteur d'événement pour le défilement de la page
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Fonction pour faire défiler la page vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={isVisible ? "back-to-top show" : "back-to-top"}>
      <button onClick={scrollToTop} title="Back to Top">
        <FaArrowCircleUp />
      </button>
    </div>
  );
};

export default BackToTopButton;
