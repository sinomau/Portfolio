'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Tailwind</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>Carrera Fullstack developer Mern - CoderHouse</li>
      </ul>
    ),
  },
];
const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white lg:py-16 ' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          className='rounded-lg flex '
          src='/images/1.png'
          alt='about'
          width={500}
          height={500}
          style={{ alignSelf: 'flex-start' }}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mí</h2>
          <p className='text-base lg:text-lg'>
            Soy un desarrollador Fullstack Mern, dando sus primeros pasos con
            conocimientos en distintas tecnologías. Decidí adentrarme en el
            mundo del desarrollo web, donde me encontré con muchas ganas de
            aprender nuevas herramientas, mejorar mis conocimientos y cambiar de
            rumbo en mi experiencia laboral.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Tecnologias{' '}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certificaciones{' '}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
