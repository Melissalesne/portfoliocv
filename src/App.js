import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Accueil from "./pages/Accueil/accueil";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import BaseScreen from "./pages/baseScreen";
import React, { Suspense } from "react";
import Photos from "./pages/photos/Photos";
import Figma from "./pages/figma/Figma";

const Contact = React.lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseScreen />}>
            <Route
              index
              element={
                <Suspense fallback={<span>chargement</span>}>
                  <Accueil />
                </Suspense>
              }
            />

            <Route
              path="/Contact"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/Photos"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Photos />
                </Suspense>
              }
            />
            <Route
              path="/Figma"
              element={
                <Suspense fallback={<span>Chargement</span>}>
                  <Figma />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
