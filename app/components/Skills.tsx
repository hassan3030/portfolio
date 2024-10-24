"use client"
import React, { useState } from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";

export const Skills = () => {
    const allskills = [{
        'title': 'HTML',
        'percent': 100,
        'icon': (<FaHtml5 className='inline'/>)
    },
    {
        'title': 'CSS',
        'percent': 70,
        'icon': (<FaCss3Alt className='inline'/>)
    },
    {
        'title': 'Tailwind CSS',
        'percent': 90,
        'icon': (<SiTailwindcss className='inline'/>)
    },
    {
        'title': 'JavaScript',
        'percent': 70,
        'icon': (<FaJs className='inline'/>)
    },
    {
        'title': 'ReactJS',
        'percent': 80,
        'icon': (<FaReact className='inline'/>)
    }, {
        'title': 'NextJS',
        'percent': 65,
         'icon': (<RiNextjsFill className='inline'/>)
    }, {
        'title': 'Bootstrab',
        'percent': 75,
         'icon': (<FaBootstrap className='inline'/>)
    }
    , {
        'title': 'GitHub',
        'percent': 75,
         'icon': (<FaGithub className='inline'/>)
    }
    , {
        'title': 'SASS',
        'percent': 75,
         'icon': (<FaSass className='inline'/>)
    }
    , {
        'title': 'API',
        'percent': 75,
         'icon': ''
    }
    ]
    const [skills , setSkills]= useState(allskills);
    const [percent , setPercent]= useState(100);
    const [circumference , setCircumference]= useState(2 * 22 / 7 * 120);
    const [resCircumference , setResCircumference]= useState(0);
  return (
    <div className ='text-3xl  text-gray-100  place-content-center ' id='skills'>
        <h2 className='transform text-center mt-6 mb-6 cursor-pointer animate-pulse'>Skills</h2>
        <main className="grid w-full min-h-screen">

<section
    className="p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
    <div className="grid grid-cols-2 gap-6">
       
            {skills.map((i)=>
                (<button 
                    className="px-4 py-2 text-xl text-gray-100 transition bg-[#111827] rounded-md h-14 w-44 hover:bg-[#3f83f8] hover:animate-pulse"
                    onClick={()=>{setPercent(i.percent) , setResCircumference(circumference-percent/100*circumference)}}
                    >
                        <span> {i?.icon} </span>
                   { i.title}
                    </button>
                    )
            )}
            
    </div>

    <div className ="flex items-center justify-center" >
        <svg className="transform -rotate-70 w-72 h-72">
            <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                className="text-gray-700" />
               
            <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                className="text-blue-500 " 
                stroke-dasharray={circumference}
                stroke-dashoffset={resCircumference}
                />
        </svg>
       
        
        <span className="absolute text-5xl">{`${percent} %`}</span>
        
        </div>
</section>
</main>
    </div>
  )
}
