
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import python_img from '../../img/python-48.ico'
import javascript_img from '../../img/javascript.png'
import django_img from '../../img/django.png'
import postgresql_img from '../../img/postgresql.png'
import mysql_img from '../../img/mysql.png'
import flask_png from '../../img/flask.png'
import service_desk from '../../img/icons/help-desk.png'
import automata from '../../img/icons/onboarding.png'
import git from '../../img/icons/git.png'
import assistant from '../../img/icons/asistente.png'
import development from '../../img/icons/coding.png'

import '../Styles/styleHistory.css'
export const AboutHistory = () => {
    
    const experienciaLaboral = [
        {
            id: 1,
            title: 'Especialista en soporte técnico',
            subtitle: 'COFOPRI',
            description: 'Atender los diferentes requerimientos o incidencias que generaban lo usuarios en el sistema de tickets OTRS.',
            date: 'Julio 2022 - Diciembre 2022',
            icon_self: assistant,
            skills: [service_desk]
        },
        {
            id: 2,
            title: 'Asistente de Mesa de Ayuda',
            subtitle: 'Superintendencia Nacional de Migraciones Perú',
            description: 'Automatizar procesos de ticket del PROACTIVANET vía API. Reportes con Power BI y Excel.',
            date: 'Enero 2023 - Diciembre 2023',
            icon_self: assistant,
            skills: [python_img,service_desk,automata]
        },
        {
            id: 3,
            title: 'Desarrollador de back-end',
            subtitle: 'ixalab',
            description: 'Colaborar con el desarrollo de un MVP, teniendo como framework Django y la aplicación de la metodología SCRUM.',
            date: 'Enero 2024',
            icon_self: development,
            skills: [django_img, mysql_img,git]
        },
        {
            id: 4,
            title: 'Programador TIC',
            subtitle: 'Win Empresas',
            description: 'Atender requerimientos del sistema ODOO. Utilizar Flask,JavaScript y Python para realizar automatizaciones.',
            date: 'Marzo 2024 - Noviembre 2024',
            icon_self: development,
            skills: [postgresql_img, python_img, flask_png,javascript_img ]
        }
    ]

    const cardElement = (listaview) => {
        return listaview.slice().reverse().map((elemento) => {
            return (
                <VerticalTimelineElement
                    key={elemento.id}
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'rgb(31, 31, 33)',
                        color: '#fff',
                        perspective: '1000px',
                        height: '100%',
                        boxShadow: '0px 15px 15px rgba(0, 0, 0, 1)'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #47D16E' }}
                    date={elemento.date}
                    iconStyle={{
                        background: 'rgb(13, 1, 1)',
                        color: '#fff',
                        display: 'inline-block',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                    }}
                    icon={<img src={elemento.icon_self} alt="work" />}
                    
                >

                    <h3 className="vertical-timeline-element-title">{elemento.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{elemento.subtitle}</h4>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <figure className='flip-card-back'>
                                {
                                    elemento.skills.map((img) => {
                                       return <img key={elemento.id + 'skills' + img} src={img} alt='skills'/>
                                    })
                                }
                            </figure>
                            <div className='flip-card-font'>
                            <p>
                                {elemento.description}
                            </p>
                            </div>
                        </div>
                    </div>
                </VerticalTimelineElement>
            )
        })
    }

    return (
      <>
        <section className="container-history">
          <section className="history">
            <h1>Experiencia Laboral</h1>
                <VerticalTimeline layout='1-column'>
                {cardElement(experienciaLaboral)}
                <VerticalTimelineElement
                    iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                ></VerticalTimelineElement>
                </VerticalTimeline>
          </section>
        </section>
      </>
    );
}