import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local'
import AboutPic from '../../../public/about.gif'
import SkillTab from './SkillTab';
import CapabilityPic from '../../../public/capabilities.gif'




// If loading a variable font, you don't need to specify the font weight
const kodeMono = localFont({ src: '../../../public/fonts/KodeMono-VariableFont_wght.ttf' })

const Capabilities = () => {
  return (
    <div className='bg-cyan-300 text-white  px-12 py-8 my-24 rounded-[56px] w-9/12 h-fit'>

      <div className={`${kodeMono.className} text-black font-bold text-3xl mb-8`}>
        Capabilities
      </div>
      <div className={`${kodeMono.className} text-black font-semibold flex justify-between flex-wrap `}>
        <SkillTab skillName='React.js' isHighlightedSkill />
        <SkillTab skillName='Javascript' isHighlightedSkill />
        <SkillTab skillName='HTML5' />
        <SkillTab skillName='TailwindCSS' />
        <SkillTab skillName='Typescript' />
        <SkillTab skillName='CSS3' />
        <SkillTab skillName='Redux' />
        <SkillTab skillName='Jest' />
        <SkillTab skillName='Firebase' />
        <SkillTab skillName='Next.js' isHighlightedSkill />
        <SkillTab skillName='Vite' />
        <SkillTab skillName='Webpack' />
        <SkillTab skillName='Problem Solving' />
        <SkillTab skillName='React Native' />
        <SkillTab skillName='& much more..........' isHighlightedSkill />
      </div>

      <div className='flex justify-center mt-6'>
        <Image className='rounded-full 2xl:h-44 2xl:w-44' src={CapabilityPic} alt="Picture of the kermit the frog capability" />
      </div>


    </div>
  );
};

export default Capabilities;