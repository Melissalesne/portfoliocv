import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import "./baseScreen.css";

export default function BaseScreen() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
