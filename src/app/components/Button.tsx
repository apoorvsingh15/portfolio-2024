import React from 'react';

interface IButtonProps {
  color: 'black' | 'gray' | 'pink' | 'white' | 'green' | 'cyan',
  title: string,
}

const Button = ({ color, title }: IButtonProps) => {

  const setBackgroundColor = (color: IButtonProps['color']) => (
    color === 'black' ? 'bg-slate-950' :
      color === 'white' ? 'bg-white' :
        color === 'cyan' ? 'bg-cyan-300' :
          color === 'pink' ? 'bg-pink-300' : 'bg-green-300'

  );

  const setColor = (color: IButtonProps['color']) => (
    color === 'black' ? 'text-white' : 'text-black'
  )

  return (
    <div className={`${setBackgroundColor(color)} rounded-3xl px-4 py-3 ${setColor(color)} mx-2 cursor-pointer`}>
      {title}
    </div>
  );
};

export default Button;