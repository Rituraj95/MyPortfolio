import React from 'react';

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation' 
import { Link } from 'react-scroll';

const Banner = () => {
    const handleButtonClick = () => {
        window.open('https://drive.google.com/file/d/136_02N4bU_TNZhS59B85PWDX7-pazk3P/view?usp=drive_link', '_blank');
      };
      const handleButtonClick2 = () => {
        window.open('https://www.linkedin.com/in/rituraj-deka-b22172216/', '_blank');
      };
      const handleButtonClick3 = () => {
        window.open(' https://github.com/Rituraj95', '_blank');
      };
     

  return <section className='min-h-[55vh] lg:min-h-[83vh] flex items-center mb-8 lg:mb-8' id='home'>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
            <div className='flex-1 text-center font-secondary lg:text-left'>
                <h1 className='text-[50px] font-bold leading-[0.8] lg:text-[65px] mb-4'>I am Rituraj <span>Deka</span></h1>
                <div v className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                    <span className='mr-4'>A</span>
                    <TypeAnimation sequence={[
                        'Frontend Developer',
                        2000,
                       
                        'Web Application Developer',
                        2000,
                    ]} speed={50}
                    className='text-accent'
                    wrapper='span'
                    repeat={Infinity}/ >
                    
                </div>
                <p className={`mb-8 max-w-lg mx-auto lg:mx-0 font-medium md:hidden`}>
                    
                Developer from Assam, India, I specialize in creating visually stunning websites and user interfaces. With expertise in HTML, CSS, JavaScript, React js, I blend technical skills with artistic flair to deliver exceptional digital experiences that captivate and engage users.
                </p>
                <div className='flex flex-row gap-x-4 items-center'>
                <Link to='footer' activeClass='active' smooth={true} spy={true} offset={-200} className='flex max-w-max gap-x-2 items-center mb-12 ml-auto lg:mx-0'>
                    <button className='btn btn-lg border-2 border-black'>Contact Me</button>
                </Link>
                <div v className='flex max-w-max gap-x-2 items-center mb-12 mr-auto lg:mx-0'>
                    <button className='btn btn-lg border-2 border-black' onClick={handleButtonClick}>Get Resume</button>
                </div></div>
                <div v className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                    <a onClick={handleButtonClick3}>
                        <FaGithub/>  
                    </a>
                    <a onClick={handleButtonClick2}>
                        <FaLinkedin/>  
                    </a>
                </div>
            </div>
          {/*  <div className='img lg:flex items-center justify-center lg:h-[500px] md:mx-20 mb-24 pb-14'>
                    <div className='group relative h-full w-full overflow-hidden rounded-b-full aspect-[1/1.35] flex items-end'>
                        <div className='bg-red-500 absolute h-3/4 w-full rounded-full object-cover bottom-0 border-2 border-white'></div>
                        <img className='relative h-max group-hover:scale-150 w-full transition-all duration-500' src={Image} alt='image'ver/>
                    </div>
            </div> */}
        </div>
    </div>
  </section>;
};

export default Banner;
