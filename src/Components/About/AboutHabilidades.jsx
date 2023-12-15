import { Habilidades } from "../helpers/habilidades"

import '../Styles/styleHabilidades.css'


export const AboutHabilidades = () => {
    
    // Habilidades y el titulo para la sección
    
    const titulo = 'Educación/Habilidades'
    
    // obtenemos los lenguajes y herramientas, son es una lista de objetos
    const {eduacion} = Habilidades()
    
    const redireccionar = (url) => {
        window.open(url, '_blank');
        
      }

    

    const elementosLi = (variableLista) => {
        
        return variableLista.map((elemento) => {
            const logos = elemento.logos || []
            return (
                <div key={elemento.id} 
                    onClick={()=>redireccionar(elemento.url_certificado)}
                    style={{cursor: 'pointer'}}
                    >
                    <h3>{elemento.especialidad}</h3>
                    
                    <p>
                        {
                            `${elemento.descripcion}`
                        }
                    </p>
                    
                    <figure>
                    {
                        logos.map((logo, index) => (
                            <img key={index} src={logo} alt="" />
                        ))
                    } 

                    </figure>
                    
                    
                    
                     
                </div>
            )
        });    

    }
    return (
    <>
       <section className="Habilidades">
            <h1>{titulo}</h1>
            
            <section className="HabilidadesDescripcion">
                {
                    elementosLi(eduacion)
                }
            </section>
            
            
       </section>
    </>
  
  )
}
