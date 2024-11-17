import { AboutDescription } from "./AboutDescription";
import { AboutHabilidades } from "./AboutHabilidades";
import { AboutHistory } from "./AboutHistory";
import "../Styles/styleAboutMain.css";
import { useEffect } from "react";

export const AboutMain = () => {
  const miPresentacion = `Desarrollador web con experiencia en lenguajes como Python, JavaScript y Java. Tengo experiencia en diversos frameworks como Flask, React, Odoo y Django,
y siempre estoy dispuesto a aprender nuevas tecnologías y adaptarme a sistemas innovadores.                            
`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <section className="main-all-container">
        <AboutDescription contenido={miPresentacion} />
        <AboutHistory />
        <AboutHabilidades />
      </section>
    </>
  );
};
