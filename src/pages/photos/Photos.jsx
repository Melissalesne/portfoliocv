import React from "react";
import "./photos.css";

export default function Photos() {
  return (
    <>
      <h2 className="titre-photo text-center ">Instant Pictures</h2>
      <div className="photographie mt-5">
        <div className="box-photos">
          <div className="card-photo">
            <div className="imgphoto">
              <img src="assets/images/chien.jpg" />
              <div className="details"></div>
            </div>
          </div>
          <div className="card-photo">
            <div className="imgphoto">
              <img src="assets/images/soleil.jpg" />
              <div className="details"></div>
            </div>
          </div>
          <div className="card-photo">
            <div className="imgphoto">
              <img src="assets/images/coco.jpg" />
              <div className="details"></div>
            </div>
          </div>
          <div className="card-photo">
            <div className="imgphoto">
              <img src="assets/images/gribouille.jpg" />
              <div className="details"></div>
            </div>
          </div>
          <div className="card-photo">
            <div className="imgphoto">
              <img src="assets/images/saphira.jpg" />
              <div className="details"></div>
            </div>
          </div>
          <div className="card-photo">
            <div className="imgphoto">
              <img src="assets/images/spot.jpg" />
              <div className="details"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
