
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
            descripcion:`Uno de los principales objetivos de este desarrollo es aplicar las técnicas de exploración de datos, desarrollo APIs REST y 
                        sistemas de recomendación. Todo esto basado en datos de usuarios de la plataforma de STEAM.
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\mongo.png'
            ],
            link_github: 'https://github.com/JeanEspinoza10/PI_MLOps',
            link_despliegue:'',
            icono_despliegue:'',
            link_youtube: 'https://youtu.be/tTMr4Cikd4c'
        },
        {
            id: 3,
            titulo:'Bootcamp Henry - Data Science - Proyecto Yelps',
            descripcion:`Este proyecto tuvo un enfoque de estar bajo un entorno real de desarrollo. 
                        Para comenzar, aplicamos la metodología SCRUM, seguidamente definimos los 
                        roles dentro de nuestro grupo. El rol que asumí fue el de Data Engineer, teniendo 
                        la función de proponer el stack tecnológico y el proceso ETL.
            `,
            tecnologias: [
                'src\\img\\azure.png'
            ],
            link_github: 'https://github.com/Mandrad3/PGFINAL',
            link_despliegue:'',
            icono_despliegue:'',
            link_youtube: 'https://youtu.be/4J0_cUuzs7s?t=79'
        }

    ];

    return {
        proyectos
    }



};
