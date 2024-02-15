import React from 'react';
import Button from './Button';

const TopMenu = () => {
  return (
    <div>
      <div className='flex justify-between backdrop-blur m-5 border rounded-md p-4'>
        <div className='flex'>
          <Button color='pink' title='Info' />
          <Button color='cyan' title='Capabilities' />
          <Button color='green' title='Work' />
          <Button color='cyan' title='Projects' />
        </div>
        <div>
          <Button color='black' title='Resume' />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;