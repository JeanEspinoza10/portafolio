import { AllFotter } from "../General/AllFotter";
import { AllHeaders } from "../General/AllHeaders"
import { AboutDescription } from "./AboutDescription"
import { AboutHabilidades } from "./AboutHabilidades";

export const AboutMain = () => {
    
    const miPresentacion = `Ingeniero mecatrónico con sólidos conocimientos en procesos automatizados, sistemas mecatrónicos y 
                            lógica de programación. Desde que me sumergí en el mundo de la tecnología, se convirtió en mi pasión. 
                            Me enfoqué en adquirir conocimientos en desarrollo web, bases de datos y ciencia de datos, los cuales 
                            se reflejan en los proyectos personales que he desarrollado. Cada paso en mi trayectoria ha fortalecido 
                            mi amor por la tecnología, y estoy emocionado por explorar colaboraciones y compartir mis conocimientos en este campo.                            
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

