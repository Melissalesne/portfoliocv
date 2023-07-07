import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="container-form  ">
        <h1 className="titre-form ">Formulaire de contact</h1>
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="form-group">
                <label for="name">Votre nom:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label for="name">Votre prénom:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label for="email">Votre email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label for="message">Votre message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
