import { AllBox } from "../General/AllBox";
import Foto_Perfil from "../../img/Foto_Perfil.png";

import "../Styles/styleDescription.css";
export const AboutDescription = ({ contenido }) => {
  return (
    <>
      <section className="contenedorDescripcion">
        <section className="container-description-content">
          <AllBox
            titulo={"Jean Espinoza"}
            contenido={contenido}
            img={Foto_Perfil}
          />
        </section>
      </section>
    </>
  );
};
