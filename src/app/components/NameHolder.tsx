import React from 'react';
import Image from 'next/image';
import SmilePic from '../../../public/smiley.svg'
import { Anton } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Anton({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  display: 'swap',

})

const NameHolder = () => {
  return (
    <div className='flex justify-around bg-slate-950 text-white  px-4 py-6 rounded-[56px] w-[36rem] max-w-2xl	'>
      <div className='flex'>
        <Image style={{ alignSelf: 'center' }} src={SmilePic} alt="Picture of the smiling face" height={80} width={80} />
      </div>
      <div className={`${inter.className} text-[64px]`}>Apoorv Singh</div>
    </div>
  );
};

export default NameHolder;