import React from 'react';
import Img1 from '../assets/projec2.png'
import Img2 from '../assets/project1.jpg'
import Img3 from '../assets/project4.jpg'
import Img4 from '../assets/project5.jpg'


const Work = () => {
  const handleButtonClick1 = () => {
    window.open('#', '_blank');
  };
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 items-center'>
          <div >
            <h2 className='h2 leading-tight text-accent underline'>
              Projects
            </h2>
            
          </div>
          <div className='max-h-xl max-w-7xl flex flex-col item-center justify-center'>
          <div className='flex flex-col lg:flex-row lg:justify-between my-6 lg:my-10'>
          <div className='group relative h-full lg:h-80 w-full lg:w-1/2 overflow-hidden border-2 border-black/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
              <a className='text-3xl text-white underline decoration-rose-500' href='#'>Demo</a></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
              <a className='text-gradient underline decoration-white' href='#'>Code</a>
            </div>
          </div>
          <div className='flex flex-col text-right sm:hidden'>
            <h2 className='h2 text-accent'>Portfolio</h2>
            <p className='max-w-md font-medium'>
I have created a portfolio website using HTML, Tailwind CSS, and ReactJS. This website serves as a comprehensive representation of my professional journey, highlighting my educational background, acquired skills, and the projects I have completed. With a clean and modern design, the website offers a visually appealing and user-friendly experience, allowing visitors to gain insights into my abilities and explore my portfolio effortlessly.</p>
          </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between my-6 lg:my-10 '>
          <div className='lg:flex flex-col text-left sm:hidden'>
            <h2 className='h2 text-accent'>Panjika-An assamese calender</h2>
            <p className='max-w-md font-medium'>An Assamese month calender using React which provide details of each days.
            </p></div>  
          <div className='group relative h-full lg:h-80 w-full lg:w-1/2 overflow-hidden border-2 border-black/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
              <a className='text-3xl text-white underline decoration-rose-500' href='https://fancy-bienenstitch-bdd6ae.netlify.app/'>Demo</a></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
              <a className='text-gradient underline decoration-white' href='https://github.com/Rituraj95/panjika-assamese-calender'>Code</a>
            </div>
        </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between my-6 lg:my-10'>
        <div className='group relative h-full lg:h-80 w-full lg:w-1/2 overflow-hidden border-2 border-black/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
              <a className='text-3xl text-white underline decoration-rose-500' href='#'>Demo</a></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
              <a className='text-gradient underline decoration-white' href='#'>Code</a>
            </div>
        </div>
        <div className='flex flex-col text-right sm:hidden'>
            <h2 className='h2 text-accent'>Aikdhi India</h2>
            <p className='max-w-md font-medium'>I have developed frontend layout of Aikdhi India official Website.</p>
        </div>
        </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between my-6 lg:my-10 '>
          <div className='lg:flex flex-col text-left sm:hidden'>
            <h2 className='h2 text-accent'>Speech to Text Converter</h2>
            <p className='max-w-md font-medium'>The project I developed is a Speech to text Converter created using React, HTML, and CSS.Speech-to-Text Converter project aims to develop a software application that can accurately convert spoken words into written text in real-time
            </p></div>  
          <div className='group relative h-full lg:h-80 w-full lg:w-1/2 overflow-hidden border-2 border-black/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
              <a className='text-3xl text-white underline decoration-rose-500' href='https://65905257929bea888585f89c--hilarious-griffin-b4e51c.netlify.app/'>Demo</a></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
              <a className='text-gradient underline decoration-white' href='https://github.com/Rituraj95/speech-to-text-converter'>Code</a>
            </div>
        </div>
        </div>
        
        <button className='btn btn-sm border-2 border-black w-sm' onClick={handleButtonClick1}>View all Project</button>
        
        
        </div>
      </div>
  
      
    </div>
    
    
  </section>);
};

export default Work;
