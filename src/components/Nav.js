import React from 'react';
import {BiHomeAlt} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquareText, BsTools} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Nav = () => {
  return (
  <section className='fixed bottom-4 lg:bottom-10 w-full overflow-auto z-50 '>
    <div className="container mx-auto ">
        <div className= 'w-full h-[80px] backdrop-blur-lg bg-red-500/[0.6] rounded-3xl max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-black/60 border-2 border-black'>
        <Link to='home' activeClass='active'
            smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                <BiHomeAlt />
            </Link>
            <Link to='services' activeClass='active'
            smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                <BsClipboardData />
            </Link>
            <Link to='about' activeClass='active'
            smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                <BsTools />
            </Link>
            <Link to='work' activeClass='active' 
            smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                <BsBriefcase />
            </Link>
        </div>
    </div>
  </section>
  );
};
export default Nav;
