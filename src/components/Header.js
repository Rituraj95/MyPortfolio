import React from 'react';
import ToggleButton from './ToggleButton';

const Header = () => {
  return <header className='py-10 lg:pt-8 '>
    <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-row'><h1 className='text-[50px] font-bold leading-[0.8] lg:text-[50px]'>Hello
            <span className='text-[50px] font-bold leading-[0.8] lg:text-[50px] text-red-600'> World!!</span></h1></div>
            <ToggleButton />
        </div>
    </div>
  </header>;
};

export default Header;
