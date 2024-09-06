import { ProyectosAll } from "../helpers/ProyectosAll";

import github_img from "../../img/github.png";
import youtube_img from "../../img/youtube.png";

import "../Styles/styleProyecto.css";
 //Elementos
 const elementosLi = (variableLista) => {
    return variableLista.map((elemento) => {
      const despliegue = elemento.link_despliegue || [];
      const github = elemento.link_github || [];
      const youtube = elemento.link_youtube || [];

      return (
        <div key={elemento.id}>
          <h3>{elemento.titulo}</h3>
          <p>{`${elemento.descripcion}`}</p>
          <figure>
            <a href={despliegue} target="_blank">
              <img src={elemento.icono_despliegue} alt="" />
            </a>

            <a href={github} target="_blank">
              <img className="github" src={github_img} alt="" />
            </a>
            <a href={youtube} target="_blank">
              <img className="github" src={youtube_img} alt="" />
            </a>
          </figure>
        </div>
      );
    });
  };

export const ProyectosDescrip = () => {
  // Titulo de la sección
  const titulo = "Proyectos";

  // Obtenemos la data para mostrar
  const { proyectos } = ProyectosAll();
  return (
    <>
      <section className="Proyectos">
        <h1>{titulo}</h1>
        <section className="Tarjetas">{elementosLi(proyectos)}</section>
      </section>
    </>
  );
};
