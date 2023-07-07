import React from "react";
import Intro from "../../components/intro/Intro";
import "./accueil.css";
import Competences from "../../components/section/Competences";
import Langages from "../../components/langages/Langages";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import Contact from "../../components/Contact/Contact";

export default function accueil() {
  return (
    <div>
      <Intro />
      <Langages />
      <Competences />
      <BackToTopButton />
      <Contact />
    </div>
  );
}
