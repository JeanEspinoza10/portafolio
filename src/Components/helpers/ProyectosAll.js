
export const ProyectosAll = () => {

    const proyectos = [
        {
            id: 1,
            titulo:'ChatBot',
            descripcion:`Este proyecto tiene como objetivo implementar un Producto 
                        Mínimo Viable (MVP) para un chatbot destinado a un restaurante. 
                        El chatbot permitirá a los clientes interactuar con el restaurante a través de WhatsApp utilizando la API oficial de WhatsApp. 
                        La aplicación estará desarrollada utilizando la librería Flask de Python 
                        y almacenará la información en una base de datos PostgreSQL.
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\postgresql.png'
            ],
            link_github: 'https://github.com/JeanEspinoza10/chatbot_restaurante',
            link_despliegue:'',
            icono_despliegue:'',
            link_youtube: ''
        },
        {
            id: 2,
            titulo:'Machine Learning Operations',
            descripcion:`Para cualquier proceso que involucre datos, debemos comenzar primero con 
                        una exploración de los datos para poder obtener información sobre las variables, 
                        las relaciones entre ellas, la calidad de los datos, etc. Para este proyecto, 
                        los datos se encuentran en el siguiente enlace: Datos en Google Drive          
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\mongo.png'
            ],
            link_github: 'https://github.com/JeanEspinoza10/PI_MLOps',
            link_despliegue:'',
            icono_despliegue:'',
            link_youtube: ''
        }

    ];

    return {
        proyectos
    }



};
