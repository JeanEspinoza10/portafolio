import python_img from '../../img/python-48.ico'
import javascript_img from '../../img/javascript.png'
import django_img from '../../img/django.png'
import react_img from '../../img/react.png'

import postgresql_img from '../../img/postgresql.png'
import sqlserver_img from '../../img/servidor-microsoft-sql.png'
import mongo_img from '../../img/mongo.png'
import mysql_img from '../../img/mysql.png'

import labview_img from '../../img/labview.png'
import opencv_img from '../../img/opencv.png'
import matlab_img from '../../img/matlab.png'


import datafactory_img from '../../img/data-factory.png'
import azure_img from '../../img/azure.png'
import powerbi_img from '../../img/powerbi.png'



export const Habilidades = () => {


    const eduacion = [
        {
            id: 1,
            institucion: 'Código Tecsup',
            especialidad: 'Desarrollo Web Full Stack',
            descripcion: ` Especialización en la modalidad de Bootcamp 
                           enfocada en la apliación de los conceptos de
                           programación para el desarrollo web, teniendo como
                           principales tecnologias python, javascript, html5, css,
                           django, flask, nodejs, react y otros.

                        `,
            lenguajes: [
                'Python',
                'JavaScript',
                'HTML5',
                'CSS'   
            ],
            herramientas: [
                'Nodejs',
                'Flask',
                'Django',
                'MongoDB',
                'PostgreSQL',
                'React'
            ],
            logos:[
                python_img,
                javascript_img,
                django_img,
                react_img
            ],
            url_certificado: 'https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=656360&n=COD/CPE/23/54&t=E'
        
        },
        {
            id: 2,
            institucion: 'Código Tecsup',
            especialidad: 'Base de Datos',
            descripcion: `Programa de estudio donde aprendí los fundamentos de las
                          bases de datos relacionales, como creación de tablas, tipos
                          de relacionales y administración. Asimismo, de las diferentes
                          bases de datos no relacionales el diseño y su uso en aplicaciones
                          modernas.
            
            
            `,
            lenguajes: [
                'SQL'   
            ],
            herramientas: [
                'Microsoft SQL Server',
                'Oracle',
                'PostgreSQL',
                'MongoDB',
                'MySQL'
            ],
            logos:[
                postgresql_img,
                sqlserver_img,
                mongo_img,
                mysql_img
            ],
            url_certificado:'https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=714335&n=COD/CPE/23/131&t=E'

        
        },
        {
            id: 3,
            institucion: 'Univeridad Nacional de Trujillo',
            especialidad: 'Ingeniería Mecatronica',
            descripcion: `Bachillerato que me permitio adquirir las habilidades
                          del diseño de sistemas mecatrónicos para la resolución
                          de problemas industriales como de nuestra sociedad.
            `,
            lenguajes: [
                   
            ],
            herramientas: [
                
            ],
            logos:[
                labview_img,
                opencv_img,
                matlab_img
            ],
            url_certificado:'https://drive.google.com/file/d/1kzyal3ZgKLtVbC0spyYyn3yYjgIgIEdg/view?usp=drive_link'
        
        },
        {
            id: 4,
            institucion: 'Soy Henry',
            especialidad: 'Data Sciencie',
            descripcion: `Bootcamp enfocado en aprender las principales técnologias
                          sobre el proceso de ciencia de datos. Destacando en las herramientas
                          que se utilizan en los procesos de ETL con Microsoft Azure.
            
            `,
            lenguajes: [
                'Python',
                'SQL'   
            ],
            herramientas: [
                'Pandas',
                'Numpy',
                'Azure DataFactory',
                'Azure Databricks',
                'Microsoft SQL Server',
                'Microsoft Power BI'
            ],
            logos:[
                
                datafactory_img,
                azure_img,
                powerbi_img

            ],
            url_certificado:'https://certificates.soyhenry.com/new-cert?id=ebd1184fe8ba0cbdbca561abe1f1ad61e836e7420a5f54a9b8e1f169317bfbc7'
        
        }
        


    ]

    return {
        eduacion
    }

}
