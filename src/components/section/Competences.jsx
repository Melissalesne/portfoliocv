import React from "react";
import "./competences.css";
import { NavLink } from "react-router-dom";

export default function Competences() {
  return (
    <div>
      <section id="projet">
        <h2 className="comp text-center text-white">Projets personnel</h2>
        <div className="container mt-5">
          <div className="row g-4 ">
            <div className="col">
              <div className="card">
                <NavLink to="/Figma">
                  <div className="pictures">
                    <img src="assets/images/maquette.png" />
                  </div>

                  <h5>Création de maquettes avec Figma</h5>
                </NavLink>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <NavLink to="/Photos">
                  <div className="pictures">
                    <img src="assets/images/photograph.png" />
                  </div>
                  <h5>Photographie</h5>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
