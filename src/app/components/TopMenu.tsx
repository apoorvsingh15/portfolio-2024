import React from 'react';
import Button from './Button';

const TopMenu = () => {
  return (
    <div>
      <div className='flex justify-between backdrop-blur m-5 border rounded-md p-4'>
        <div className='flex'>
          <Button color='white' title='Info' />
          <Button color='black' title='Capabilities' />
          <Button color='black' title='Work' />
        </div>
        <div>
          <Button color='black' title='Resume' />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;