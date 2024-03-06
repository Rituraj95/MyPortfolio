import React from 'react'
import {AiFillTwitterCircle, AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

function Footer() {
  return (
    <section id="footer">
    <div className=" w-full bg-rose-950 pt-8 pb-20 z-50 px-10 border-t-2 border-t-rose-500">
        <div className="flex flex-row justify-between">
          <div className="w-full px-4">
            <h4 className="text-3xl font-semibold text-orange-200">Let's get in touch!</h4>
            <h5 className="text-lg mt-0 mb-1 text-orange-200">
              Find me on any of these platforms.
            </h5>
            <div className="mt-1 lg:mb-6 mb-6 items-start">
              <div className= 'w-full h-[40px] rounded-3xl flex text-2xl text-white/60 '>
                <a className='cursor-pointer w-[50px]' href='#' ><AiFillTwitterCircle className='w-[40px] h-[40px]' /></a>
                <a className="cursor-pointer w-[50px]" href='#'><AiFillGithub className='w-[40px] h-[40px]'/></a>
                <a className="cursor-pointer w-[50px]" href='#'><AiFillLinkedin className='w-[40px] h-[40px]'/></a>
                <a className="cursor-pointer w-[50px]" href='#'><MdEmail className='w-[40px] h-[40px]'/></a>
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-red-200 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-orange-200 hover:text-orange-300 font-semibold block pb-2 text-sm" href="#">Leetcode</a>
                  </li>
                  <li>
                    <a className="text-orange-200 hover:text-orange-300 font-semibold block pb-2 text-sm" href="#">Blog</a>
                  </li>
                  <li>
                    <a className="text-orange-200 hover:text-orange-300 font-semibold block pb-2 text-sm" href="#">Github</a>
                  </li>
                  <li>
                    <a className="text-orange-200 hover:text-orange-300 font-semibold block pb-2 text-sm" href="#">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Footer