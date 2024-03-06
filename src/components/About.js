import React from 'react';
import { useInView } from 'react-intersection-observer';
import laptop from '../assets/laptop2 (3).json';
import Lottie from 'lottie-react'
import { FaHtml5, FaFigma, FaJs, FaCss3Alt, FaReact, FaBootstrap, FaUbuntu, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { SiMysql, SiAdobephotoshop, SiMui, SiTailwindcss } from "react-icons/si";

const About = () => {
  const[ref, inView] = useInView({
    threshold:0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-5 lg:flex-row lg:items-center'>
          <div className='lg:flex flex-1 max-w-[500px] h-[500px] lg:max-w-[800px] md:hidden'>
            <Lottie animationData={laptop}></Lottie>
          </div>
          <div className='flex-1 gap-y-10 items-center'> 
            <h2 className='h2 text-accent underline'>Skills</h2>
            <h3 className='h3 mb-12'>I'm a Software Developer with Various skills</h3>
            <div className=''>
            <div className="relative flex flex-row overflow-x-hidden">
              <div className="flex flex-row py-4 animate-marquee whitespace-nowrap">
                <span className="text-4xl mx-2"><FaHtml5/></span>
                
                <span className="text-4xl mx-2"><FaCss3Alt/></span>
                <span className="text-4xl mx-2"><FaJs/></span>
                <span className="text-4xl mx-2"><FaBootstrap/></span>
                <span className="text-4xl mx-2"> <FaReact/></span>
               
                <span className="text-4xl mx-2"><FaDatabase/></span>
               
            
                <span className="text-4xl mx-2"> <SiMysql/></span>
            
                <span className="text-4xl mx-2"> <SiTailwindcss/></span>
              </div>
              <div className="absolute top-0 py-4 flex flex-row animate-marquee2 whitespace-nowrap">
                <span className="text-4xl mx-2"><FaHtml5/></span>
                <span className="text-4xl mx-2"><FaFigma/></span>
                <span className="text-4xl mx-2"><FaCss3Alt/></span>
                <span className="text-4xl mx-2"><FaJs/></span>
                <span className="text-4xl mx-2"><FaBootstrap/></span>
                <span className="text-4xl mx-2"> <FaReact/></span>
                <span className="text-4xl mx-2"><FaUbuntu/></span>
                <span className="text-4xl mx-2"><FaDatabase/></span>
                <span className="text-4xl mx-2"><FaMicrosoft/></span>
                <span className="text-4xl mx-2"> <SiMui/></span>
                <span className="text-4xl mx-2"> <SiMysql/></span>
                <span className="text-4xl mx-2"> <SiAdobephotoshop/></span>
                <span className="text-4xl mx-2"> <SiTailwindcss/></span>
              </div>
            </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
