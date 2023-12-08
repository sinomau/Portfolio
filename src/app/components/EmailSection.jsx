'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/github.svg';
import LinkedinIcon from '../../../public/linkedin.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmited, setEmailSubmited] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmited(true);
    }
  };

  return (
    <section
      id='contact'
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'
    >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>

      <div>
        <h5 className='text-xl font-bold text-white my-2'>Contactame</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Actualmente estoy buscando nuevas oportunidades, mi inbox está siempre
          abierto a cualquier consulta.{' '}
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link target='_blank' href='https://github.com/sinomau' alt='github'>
            <Image src={GithubIcon} alt='github'></Image>
          </Link>
          <Link
            target='_blank' 
            href='https://www.linkedin.com/in/mauro-sinopoli-a81a12235/'
            alt='linkedin'
          >
            <Image src={LinkedinIcon} alt='linkedin'></Image>
          </Link>
        </div>
      </div>
      <form className='flex flex-col' onSubmit={handleSubmit} action=''>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='text-white block mb-2 text.sim fond-medium'
          >
            Email
          </label>

          <input
            name='email'
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text.sm rounded-lg block w-full  p-2.5'
            type='email'
            id='email'
            required
            placeholder='email@example.com'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='subject'
            className='text-white block mb-2 text.sim fond-medium'
          >
            Asunto
          </label>
          <input
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text.sm rounded-lg block w-full  p-2.5'
            type='text'
            id='subject'
            required
            placeholder='Asunto'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='text-white block mb-2 text.sim fond-medium'
          >
            Mensaje
          </label>
          <textarea
            name='message'
            id='message'
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text.sm rounded-lg block w-full  p-2.5'
            placeholder='Mensaje'
          ></textarea>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
          Enviar mensaje
        </button>
        {emailSubmited ? (
          <p className='text-green-500 text-sm mt-2'>
            Email enviado correctamente
          </p>
        ) : null}
      </form>
    </section>
  );
};

export default EmailSection;
