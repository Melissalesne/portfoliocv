import React from "react";
import "./intro.css";

export default function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="container">
          <div className="row align-items-center justify-content-center  m-auto">
            <div className="col-lg-12 m-auto text-center">
              <h1 className="contenu ">Mélissa Lesne</h1>

              <h2 className="description mt-3 ">
                Développeuse web & UI Designer en devenir
              </h2>

              {/* <p className="text mt-4 text-center">
                Petite introduction à venir, pour l'instant je ne sais pas trop
                quoi écrire
              </p> */}

              <div className="lien-contact mt-4">
                <a
                  className="btn btn-outline-dark m-2 mt-3"
                  href="assets/images/MELISSA.LESNE.CV.pdf"
                  download="MELISSA.LESNE.CV.pdf"
                >
                  Télécharger mon CV
                </a>
              </div>

              <div className="social m-auto ">
                <li className="d-flex nav-item justify-content-center mt-4 gap-3 ">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/mel.instantpictures/"
                  >
                    <i class="fa-brands fa-instagram fa-2x"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/m%C3%A9lissa-lesne-a334a5227/"
                  >
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://github.com/Melissalesne"
                  >
                    <i class="fa-brands fa-github fa-2x"></i>
                  </a>
                </li>
              </div>
            </div>
            {/* <div className="box-intro col-lg-6">
              <img src="assets/images/template.png" />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
