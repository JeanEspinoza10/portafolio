import dominio from "../../img/dominio.png";
import appingles from "../../img/proyectos/appingles.svg";
import apideploy from "../../img/proyectos/apideploy.svg";

export const ProyectosAll = () => {

    const proyectos = [
        {
            id: 1,
            titulo:'Aprendiendo Inglés',
            descripcion:`Aplicación web enfocado en el aprendizaje del idioma inglés mediante frases. Utilizando la PhraseForge API se cumple con el objetivo de generar frases en inglés.
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
            link_youtube: '',
            url_img: apideploy

        },
        {
            id: 3,
            titulo:'ChatBot',
            descripcion:`Proyecto creado con el objetivo de transformar la experiencia de atención en restaurantes, cubriendo la necesidad urgente de un chatbot eficiente.
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
            titulo:'Proyecto Yelps',
            descripcion:`Este proyecto se desarrolló en un entorno real aplicando la metodología SCRUM, con roles bien definidos en el equipo. Asumí el rol de Data Engineer, encargado de proponer el stack tecnológico y gestionar el proceso ETL.
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
