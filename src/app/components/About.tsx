import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local'
import AboutPic from '../../../public/about.gif'

// If loading a variable font, you don't need to specify the font weight
const kodeMono = localFont({ src: '../../../public/fonts/KodeMono-VariableFont_wght.ttf' })

const About = () => {
  return (
    <div className='bg-pink-300 text-white  px-12 py-8 rounded-[56px] w-full'>
      <div className='flex justify-between'>
        <div className={`${kodeMono.className} text-black font-semibold md:max-w-[18rem] xl:max-w-[18rem] 2xl:max-w-[24rem]`}>
          Hello there! <br /><br />
          I&apos;m a dedicated and seasoned front-end developer with a proven track record of over 5 years
          specializing in React.js. My journey in the ever-evolving realm of web development has equipped me with a
          deep understanding of front-end technologies and a keen eye for crafting seamless user experiences. <br /><br />
          With extensive hands-on experience in React.js, I have honed my skills in building robust and scalable web applications.
          From component-based architecture to state management, I thrive in creating dynamic and efficient user interfaces.
        </div>
        <div className='self-center'>
          <Image className='rounded-full 2xl:h-44 2xl:w-44' src={AboutPic} alt="Picture of the kermit the frog" />
        </div>
      </div>
    </div>
  );
};

export default About;