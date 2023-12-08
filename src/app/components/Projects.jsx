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
    gitUrl: 'https://github.com',
    liveUrl: 'https://sinomau.github.io/mixteam/index.html',
  },
  {
    id: 2,
    imgUrl: 'images/projects/shop.png',
    title: 'React Shop',
    description:
      'Shop es una tienda en línea desarrollada en React, utilizando tecnologías como Firebase para funciones en la nube, React Bootstrap para la interfaz, React Router para la navegación, y SweetAlert2 para ventanas modales. Además, se emplean herramientas de testing como Testing Library. Puedes explorar la tienda en github.',
    gitUrl: 'https://github.com/sinomau/ReactShop/tree/main',
    liveUrl: 'https://sinomau.github.io/ReactShop/',
  },
  {
    id: 3,
    imgUrl: '',
    title: 'Proyecto 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloremque.',
    gitUrl: 'https://github.com',
    liveUrl: 'https://mixteam.com',
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
