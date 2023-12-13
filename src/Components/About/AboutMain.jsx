import { AllFotter } from "../General/AllFotter";
import { AllHeaders } from "../General/AllHeaders"
import { AboutDescription } from "./AboutDescription"
import { AboutHabilidades } from "./AboutHabilidades";

export const AboutMain = () => {
    
    const miPresentacion = `Como ingeniero mecatrónico, me he sumergido en el desarrollo de procesos automatizados y sistemas mecatrónicos, 
                            adquiriendo sólidos conocimientos en lógica de programación. Mi especialización abarca el desarrollo web, 
                            explorando Python, Flask y Django, donde he creado experiencias dinámicas 
                            con Javascript y React. Cada paso en mi trayectoria ha fortalecido mi pasión por la tecnología, y 
                            estoy entusiasmado por explorar colaboraciones y compartir mis conocimientos en este campo. Te invito a 
                            descubrir más sobre mi trabajo en mi portafolio, seguro de que encontrarás interesantes mis proyectos y logros.
    
`;

    return (
        <>
            
            <AllHeaders name={'Jean'}/>
            <AboutDescription contenido={miPresentacion}/>        
            <AboutHabilidades/>
            <AllFotter name={'Jean'}/>
        </>
    
    
  )
}


