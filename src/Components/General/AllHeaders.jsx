import { AllButtons } from "./AllButtons";


import '../Styles/stylesHeaders.css'
import { useState } from "react";
import { useEffect } from "react";


export const AllHeaders = ({name}) => {
    
    // Nombre que mostrara al inicio de header
    

    // Estos nombres son lo se visulizara en el headers esta correlacionado con las rutas
    const pagesAll = [ 'Acerca', 'Proyectos'];
    
    const [pathName, setpathName] = useState('')

    const rutaActual = window.location.pathname;

    useEffect(() => {

        
        setpathName(rutaActual)

    }, [])
    
    const formateoRuta = pathName.split('/').join('');
    
    return (
        <>
            <section className="AllHeaders">
                <h3>{name}</h3>    
                
                <div>
                    {
                        pagesAll.map((page,index)=>{
                            
                            return (
                            
                            <a key={page} href={`/${page}`} className={formateoRuta===page?'activate':""}> {page}</a>
                            
                            )
                        })
                    }
                </div>           
                <AllButtons nameButton={"Descargar CV"}/>
            </section>
            
            
           
        </>
  )
}
