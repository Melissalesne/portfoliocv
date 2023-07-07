import React from "react";
import "./backToTopButton.css";
import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher ou masquer la flèche en fonction du défilement de la page
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Fait défiler la page en douceur vers le haut
    });
  };

  return (
    <div>
      {isVisible && (
        <button1 className="back-to-top-button" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up"></i>
          {/* Ajoutez la classe CSS appropriée pour l'icône */}
        </button1>
      )}
    </div>
  );
}
