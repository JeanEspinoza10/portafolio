import { AllButtons } from "./AllButtons";

import "../Styles/stylesHeaders.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const AllHeaders = ({ name }) => {
  // Nombre que mostrara al inicio de header

  // Estos nombres son lo se visulizara en el headers esta correlacionado con las rutas
  const pagesAll = ["Acerca", "Proyectos"];

  const [pathName, setpathName] = useState("");

  return (
    <>
      <section className="AllHeaders">
        <h3>{name}</h3>

        <div>
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
      </section>
    </>
  );
};
