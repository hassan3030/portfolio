"use client"

import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import photo from '../assets/photo.png';
import Image from 'next/image';
import Link from 'next/link'
import  './main.css'

const Main = () => {
  return (
    <div className='mt-14' id='home'> 
   {/* wellcome message */}
    <div className='flex xl:flex-row 2xl:flex-row lg:flex-row  flex-col-reverse md:flex-col-reverse text-yellow-50 justify-evenly '>
      <div className=' flex  flex-col justify-center text-4xl font-extrabold  m-auto'>
        <h2 className='pt-3 type2 w-fit bg-gradient-to-t mt-3  from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text' >Welcome To Site </h2>
        <h2 className='pt-3 type  mt-3'>Hello I'm  Hassan Hamdi</h2>
        <p className='pt-3 bg-gradient-to-t mt-3  from-yellow-50 via-purple-500 to-pink-500 text-transparent bg-clip-text'>I'm Front End Developer <br /><FaReact className='inline faReact  text-yellow-50 '  /> React  <RiNextjsFill className='inline animate-pulse text-yellow-50'/> NextJS  </p>
        <div className='mt-8'>
        <button type="button" className="text-[#D5C4EF] bg-[#AE58D7] hover:bg-[#c56cee]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <Link className='text-xl hover:text-[#AEAFB3] p-2 transition duration-700 ease-in-out' href= 'https://drive.google.com/file/d/15AXrgceZmxmKzhnLoPhXfv5rjREgkz1y/view?usp=drive_link' target='_blank'>Show CV <TbFileCv className='inline-block text-lg '/></Link>
        
          </button>
        <button type="button" className="text-[#D5C4EF] bg-transparent hover:bg-[#AE58D7]  focus:ring-4 focus:ring-blue-300 font-medium  rounded-full  border-4 border-[#c56cee] text-lg px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <Link className='text-xl hover:text-[#AEAFB3] p-2 transition duration-700 ease-in-out' href= 'https://github.com/hassan3030' target='_blank'> Show Works <FaCode className='inline-block text-lg '/></Link>
         
          
          </button>
        </div>
      </div>
{/* photo profile */} 
      <div className="m-auto text-center" >


      <div className=" max-w-sm shadow bg-[#000319] sm:m-auto md:m-auto">
    <a href="#">
    <Image 
      className='boxPhoto hover:scale-[1.01] sm:m-auto md:m-auto md:text-center '
      src={photo}
      width={300}
      height={300}
      alt="Picture of the author"
    />
    </a>
    
</div>


      </div>

    </div>

    

    </div>
  )
}

export default Main