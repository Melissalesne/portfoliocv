import React from "react";
import "./langages.css";

export default function Langages() {
  return (
    <div>
      <section id="comp">
        <h2 className="comp text-center text-white ">Langages & Logiciels</h2>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="icon">
                <div className="icon-tech">
                  <div className="front">
                    <img src="assets/images/html.png" />
                  </div>
                  <div className="back">
                    <p>HTML</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <div className="icon-tech">
                  <div className="front">
                    <img src="assets/images/css.png" />
                  </div>
                  <div className="back">
                    <p>CSS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <div className="icon-tech">
                  <div className="front">
                    <img src="assets/images/js.png" />
                  </div>
                  <div className="back">
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <div className="icon-tech">
                  <div className="front">
                    <img src="assets/images/bootstrap.png" />
                  </div>
                  <div className="back">
                    <p>BOOTSTRAP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <div className="icon-tech">
                  <div className="front">
                    <img src="assets/images/react.png" />
                  </div>
                  <div className="back">
                    <p>REACT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <div className="icon-tech">
                  <div className="front">
                    <img src="assets/images/figma.png" />
                  </div>
                  <div className="back">
                    <p>FIGMA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <div className="icon-tech">
                  <div className="front">
                    <img src="assets/images/lightroom.png" />
                  </div>
                  <div className="back">
                    <p>LIGHTROOM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
