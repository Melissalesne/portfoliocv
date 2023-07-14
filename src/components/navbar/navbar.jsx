import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mt-3 ">
        <div className="container-fluid">
          <a className="navbar-brand text-white " href="/"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <NavLink to="/">
                <li className="nav-item">
                  <a className="" href="#">
                    A propos de moi
                  </a>
                </li>
              </NavLink>

              <li className="nav-item">
                <a className="" href="#comp">
                  Compétences
                </a>
              </li>

              <li className="nav-item">
                <a className="" href="#projet">
                  Projets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
