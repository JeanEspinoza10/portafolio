import { AllButtons } from "./AllButtons";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../Styles/stylesHeaders.css";

export const AllHeaders = ({ name }) => {
  const pagesAll = ["Acerca", "Proyectos"];

  const [pathName, setpathName] = useState("");

  return (
    <>
      <section className="AllHeaders">
        <header className="container-header">
          <h3>{name}</h3>

          <div className="container-links">
            <NavLink
              to="/Acerca"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Acerca
            </NavLink>
            <NavLink
              to="/Proyectos"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Proyectos
            </NavLink>
          </div>

          <AllButtons nameButton={"Descargar CV"} />
        </header>
      </section>
    </>
  );
};
