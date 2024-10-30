
"use client"

import React from 'react'
import Link from 'next/link'
import './header.css'
const Header = () => {
  return ( 
    <div className='flex flex-row justify-center mt-10 ' >
        <ul className='box text-gray-50 list-none rounded-full  bg-[#081a25]  w-fit p-4'>
            <li className='inline '>
                <Link className='text-xl hover:text-[#AEAFB3] p-2 transition duration-700 ease-in-out' href={'#home'}>Home</Link>
            </li>
            <li className='text-xl inline'>
                <Link className='text-xl hover:text-[#AEAFB3] p-2 transition duration-700 ease-in-out' href={'#projects'}>Projects</Link>
            </li>
            <li className='text-xl inline'>
                <Link className='text-xl hover:text-[#AEAFB3] p-2 transition duration-700 ease-in-out' href={'#skills'}>Skills</Link>
            </li>
            <li className='text-xl inline'>
                <Link className='text-xl hover:text-[#AEAFB3] p-2 transition duration-700 ease-in-out' href={'#contact'}>Contact</Link>
            </li>
            
            <li className='text-xl inline'>
                <Link className='text-xl hover:text-[#AEAFB3] p-2 transition duration-700 ease-in-out' href="sites">Sites</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header