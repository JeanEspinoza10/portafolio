import dominio from "../../img/dominio.png";
import appingles from "../../img/proyectos/appingles.svg";
import apideploy from "../../img/proyectos/apideploy.svg";
import shortlinks from "../../img/proyectos/shortlinks.png";
import shortlinksapi from "../../img/proyectos/apishort.png";
import chabot from "../../img/proyectos/chatbot.png";

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
            titulo:'Shortlinks',
            descripcion:`Aplicación web para generar enlaces cortos a páginas web, con el objetivo de reducir el tiempo que se necesita para acceder a sitios web.
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\postgresql.png'
            ],
            link_github: 'https://github.com/JeanEspinoza10/frontShortLinks',
            link_despliegue:'https://app.linksfast.site/',
            icono_despliegue:dominio,
            link_youtube: '',
            url_img: shortlinks
        },
        {
            id: 4,
            titulo:'Api - Shortlinks',
            descripcion:`API para generar enlaces cortos a páginas web, y obtener sus estadísticas.
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\postgresql.png'
            ],
            link_github: 'https://github.com/JeanEspinoza10/frontShortLinks',
            link_despliegue:'https://linksfast.site/api-docs/',
            icono_despliegue:dominio,
            link_youtube: '',
            url_img: shortlinksapi
        },
        {
            id: 5,
            titulo:'ChatBot',
            descripcion:`Proyecto creado con el objetivo de transformar la experiencia de atención en restaurantes, cubriendo la necesidad urgente de un chatbot eficiente.
            `,
            tecnologias: [
                'src\\img\\python-48.ico',
                'src\\img\\postgresql.png'
            ],
            link_github: 'https://github.com/JeanEspinoza10/chatbot_restaurante',
            link_despliegue:'',
            icono_despliegue:dominio,
            link_youtube: '',
            url_img: chabot
        }

    ];

    return {
        proyectos
    }



};
