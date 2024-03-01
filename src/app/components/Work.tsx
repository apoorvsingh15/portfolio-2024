import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local'
import AboutPic from '../../../public/about.gif'

// If loading a variable font, you don't need to specify the font weight
const kodeMono = localFont({ src: '../../../public/fonts/KodeMono-VariableFont_wght.ttf' })

const Work = () => {
  return (
    <div className={`${kodeMono.className} bg-green-300 text-black px-12 py-8 rounded-[56px] w-full`}>
      <div className={'font-bold text-3xl mb-12'}>Work</div>

      <div className='font-bold text-xl mb-4'>2021 - present</div>
      <div className='text-base mb-8'>Senior Software Developer @ Snaphunt.com</div>

      <div className='font-bold text-xl mb-4'>2020 - 2021</div>
      <div className='text-base mb-8'>Senior Associate - Mobility Group @ Zapbuild Technologies</div>

      <div className='font-bold text-xl mb-4'>2019 - 2020</div>
      <div className='text-base mb-8'>Software Developer @ Zamora Innovation Pvt. Ltd.</div>

      <div className='font-bold text-xl mb-4'>2018 - 2019</div>
      <div className='text-base mb-8'>Frontend Developer - Reactjs @ Techindustan Solutions</div>
    </div>
  );
};

export default Work;