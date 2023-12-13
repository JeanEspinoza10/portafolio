import '../Styles/styleFotter.css'

export const AllFotter = ({name}) => {


    // Estos nombres son lo se visulizara en el headers esta correlacionado con las rutas
    const pagesAll = [ 'Acerca', 'Proyectos'];
    
    
    return (
    <>
        <section className="Footer"> 

            
            <div className="Contáctame">
                <h4>Contáctame</h4>
                <a href="https://www.linkedin.com/in/jcespinozacdev/" target="_blank">Linkedin</a>
                
            </div>            
            
        </section>
    </>
  )
}
