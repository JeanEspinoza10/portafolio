import dominio from "../../img/dominio.png";
import appingles from "../../img/proyectos/appingles.svg";

export const ProyectosAll = () => {

    const proyectos = [
        {
            id: 1,
            titulo:'App Aprendizaje Inglés',
            descripcion:`Aplicación web enfocado en el aprendizaje de frases en inglés. Utilizando la PhraseForge API.
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\mongo.png'
            ],
            link_github: '',
            link_despliegue:'https://appingles.site/home',
            icono_despliegue:dominio,
            link_youtube: '',
            url_img: appingles
        },
        {
            id: 2,
            titulo:'PhraseForge API',
            descripcion:`API para generar frases de español a inglés, junto con su imagen y sonido en inglés correspondientes.
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\mongo.png'
            ],
            link_github: 'https://github.com/JeanEspinoza10/backendAppLearning',
            link_despliegue:'https://ingles.appdevelopmentapis.site/',
            icono_despliegue:dominio,
            link_youtube: ''

        },
        {
            id: 3,
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
            id: 4,
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
