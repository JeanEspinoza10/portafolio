import { AllBox } from "../General/AllBox"

import '../Styles/styleDescription.css'
export const AboutDescription = ({contenido}) => {
  return (
    <>
        <section className="contenedorDescripcion">        
                <AllBox titulo={'Jean Espinoza'} contenido={contenido} img='src\\img\\Foto_Perfil.png'/>
        </section>
    </>
  )
}
