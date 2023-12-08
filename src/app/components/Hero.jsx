'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-12 mt-10'>
      <div className='col-span-7 place-self-center text-center'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
          <span className='lg:text-8xl sm:text-6xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-800 to-blue-300'>
          Hola!, soy{' '}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Mauro Sinopoli',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Fullstack developer',
              1000,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <div>
          <button className='w-full sm:w-fit bg-white px-6 py-3 rounded-full hover:bg-slate-200 text-black mr-3'>
            Contacto
          </button>
          <button className='w-full sm:w-fit bg-transparent px-6 py-3 rounded-full hover:bg-slate-800 border border-white mt-3 text-white'>
            Descargar CV
          </button>
        </div>
      </div>
      <div className='col-span-5 mt-10 place-self-center lg:mt-0'>
        <Image
          src='/images/hero.png'
          width='300'
          height='300'
          className='rounded-full xl:w-[300px] xl:h-[300px] lg:w-[300px] lg:h-[300px]   w-[200px] h-[200px] object-cover'
          alt='img'
          style={{ alignSelf: 'top' }}
        />
      </div>
    </section>
  );
};

export default Hero;
