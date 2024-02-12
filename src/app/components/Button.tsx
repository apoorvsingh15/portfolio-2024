import React from 'react';

interface IButtonProps {
  color: 'black' | 'gray' | 'pink' | 'white' | 'green',
  title: string,
}

const Button = ({ color, title }: IButtonProps) => {

  const setColor = (color: IButtonProps['color']) => (
    color === 'black' ? 'bg-slate-950' :
      color === 'white' ? 'bg-white' : 'bg-red-700'
  )

  return (
    <div className={`${setColor(color)} rounded-lg px-2 py-3`}>
      {title}
    </div>
  );
};

export default Button;