import { AboutDescription } from "./AboutDescription"
import { AboutHabilidades } from "./AboutHabilidades";
import { AboutHistory } from "./AboutHistory";

export const AboutMain = () => {
    
    const miPresentacion = `Profesional en ingeniera con más de 1 año de experiencia en el área de soporte TI; adquiriendo las
                            habilidades de trabajo en equipo, empatía y resolución de conflictos. Durante el bachillerato encontré
                            la pasión de crear soluciones a problemas aplicando la tecnológica, llevándome a estudiar
                            especializaciones en Desarrollo Web, Base de Datos y Data science. Estoy entusiasmado en aplicar
                            tanto mis conocimientos técnicos y habilidades blandas en un nuevo proyecto tecnológico.                           
`;

    return (
        <>
            
            
            <AboutDescription contenido={miPresentacion}/>   
            <AboutHistory/>     
            <AboutHabilidades/>
            
        </>
    
    
  )
}

