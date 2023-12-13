// Este componente sirve para generar cajas de text con su Título correspondiente

export const AllBox = ({titulo,contenido,tipo=1,img}) => {

    const generadorCaja = () => {
        if (tipo === 1 && img){
            return (
                <>
                    <img src={img} alt="Foto de perfil" width="448" height="448"></img>
                    
                    <div>
                        <h1>{titulo}</h1>
                        <p>{contenido}</p>
                    </div>
                    
                    
                </>
                
            )
        }else if(tipo==2 && img){

            return(
                <>
                    <img src={img} alt="Foto de perfil" width="448" height="448"></img>
                    
                    <div>
                        <h2>{titulo}</h2>
                        <p>{contenido}</p>
                    </div>
                    
                </>
            )
                    
        }
    }

    return (
    <>
        
            {
                generadorCaja()
            }
       
    </>
  )
}
