'use client';
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    imgUrl: 'images/projects/mixteam.png',
    title: 'Mix team',
    description:
      'Esta aplicación en JavaScript y estilos en picocss es un mezclador de equipos. Permite agregar jugadores, mezclarlos en dos equipos y compartirlos por WhatsApp. Recupera y guarda los equipos en el almacenamiento local del navegador. Además, ofrece funciones para reiniciar los equipos.También proporciona noticias, el clima y resultados de fútbol.',
    gitUrl: 'https://github.com/sinomau/mixteam',
    liveUrl: 'https://sinomau.github.io/mixteam/index.html',
  },
  {
    id: 2,
    imgUrl: 'images/projects/shop.png',
    title: 'React Shop',
    description:
      'Shop es una tienda en línea desarrollada en React, utilizando tecnologías como Firebase para funciones en la nube, React Bootstrap para la interfaz, React Router para la navegación, y SweetAlert2 para ventanas modales. Además, se emplean herramientas de testing como Testing Library. Puedes explorar la tienda en github.',
    gitUrl: 'https://github.com/sinomau/ReactShop/tree/main',
    liveUrl: 'https://react-shop-iota-nine.vercel.app/',
  },
  {
    id: 3,
    imgUrl: 'images/projects/backend.png',
    title: 'Backend Ecommerce',
    description:
      'El "backend-proyect" es una robusta infraestructura desarrollada con Node.js y Express, respaldada por MongoDB y Mongoose para el modelado de datos. Gestiona la autenticación mediante Passport y JSON Web Tokens, y ofrece comunicación en tiempo real con Socket.io. Incorpora herramientas como Multer, Nodemailer, Swagger y otras para un desarrollo eficiente y seguro. El código y la documentación detallada están disponibles en su repositorio de GitHub.',
    gitUrl: 'https://github.com/sinomau/Backend/tree/main',
    liveUrl: 'https://backend-production-ac1d.up.railway.app/',
  },
  {
    id: 4,
    imgUrl: 'images/projects/desarrollo.png',
    title: 'Desarrollo Web HTML - CSS',
    description:'Este proyecto no solo representó un desafío emocionante sino también una oportunidad para consolidar mis habilidades en el desarrollo web. Cada fase del proyecto fue respaldada por la sólida base teórica y práctica proporcionada por el curso, permitiéndome construir un portafolio web sólido y funcional. ¡Estoy emocionado de compartir este viaje de aprendizaje y desarrollo con ustedes!',
    gitUrl: 'https://github.com/sinomau/Proyecto-Desarrollo-Web',
    liveUrl: 'https://sinomau.github.io/Proyecto-Desarrollo-Web/',
  },
  {
    id:4,
    imgUrl: 'images/projects/vanilla.png',
    title: 'Javascript vanilla Ecommerce',
    description:'Este proyecto no solo me desafió a aplicar mis conocimientos de JavaScript en un entorno práctico, sino que también me proporcionó una comprensión profunda de los aspectos avanzados de este poderoso lenguaje de programación. Cada etapa del curso fue fundamental para el desarrollo exitoso de este proyecto, consolidando mi habilidad para crear soluciones interactivas y dinámicas utilizando JavaScript',
    gitUrl: 'https://github.com/sinomau/Proyecto-Final-JS',
    liveUrl: 'https://sinomau.github.io/Proyecto-Final-JS/', 
  },

];

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        Mis Proyectos
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.imgUrl}
            description={project.description}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
          />
        ))}{' '}
      </div>
    </section>
  );
};

export default Projects;
