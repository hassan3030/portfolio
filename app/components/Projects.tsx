"use client"
import React, {useState} from 'react'
import { PinContainer } from "../../components/ui/3d-pin";
import Image from 'next/image';
import { projects } from "../util/types"
import { photos } from "../util/types"

// photoes
import photo1 from '../assets/projects/c1.png';
import photo2 from '../assets/projects/Capture3.png';
import photo3 from '../assets/projects/Capture4.png';
import photo4 from '../assets/projects/Capture5.png';
import photo5 from '../assets/projects/Capture6.png';
import photo6 from '../assets/projects/c7.png';
import photo7 from '../assets/projects/Capture8.png';

const Projects = () => {
  const dataProjects:projects[] =[
    {
      title:'Gf Center',
      caption:'Cenetr of corses',
      linkView:'https://hassan3030.github.io/gf_center/',
      linkHup:'https://github.com/hassan3030/gf_center'
    },
    {
      title:'BentDesin',
      caption:'Simple page with animation',
      linkView:'https://hassan3030.github.io/bentDesin/',
      linkHup:'https://github.com/hassan3030/bentDesin'
    },{
      title:'Doctor',
      caption:'Simple page of mediccine',
      linkView:'https://hassan3030.github.io/doctor/',
      linkHup:'https://github.com/hassan3030/doctor'
    },
    {
      title:'Profile',
      caption:'This is profile',
      linkView:'https://hassan3030.github.io/profile/',
      linkHup:'https://github.com/hassan3030/profile'
    },
    {
      title:'Epilogue',
      caption:'Simple page',
  
      linkView:'https://hassan3030.github.io/epilogue/',
      linkHup:'https://github.com/hassan3030/epilogue'
    },
    {
      title:'E_Commerce',
      caption:'E_Commerce to pay close',
    
      linkView:'https://hassan3030.github.io/E_com/',
      linkHup:'https://github.com/hassan3030/E_com'
    },
    {
      title:'Agency',
      caption:'Simple web site',

      linkView:'https://hassan3030.github.io/agency/',
      linkHup:'https://github.com/hassan3030/agency'
    },

  ]
  const photoProjects:photos[] =[
    {
       
    photo:photo1,    
},
{
 photo:photo2,    
},
{
 photo:photo3,    
},
{
 photo:photo4,    
},
{
 photo:photo5,    
},
{
 photo:photo6,    
},
{
 photo:photo7,    
}
]
  const [project , setProject] =  useState(dataProjects)
  const [photoes , setPhotoes] =  useState(photoProjects)
  return (
    <>
    <h2 className='text-white  text-3xl text-center m-auto mt-36'> A small selection of <span className=' text-purple-500'>recent projects</span> </h2>
    <div id='projects' className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 '>
       
      {
         project.map((val , i) => (
            <div className="h-[40rem] w-full flex  items-center justify-center -mt-16 ">
            <PinContainer
              title={val.title}
              href={val.linkView}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {val.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                     {val.caption}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                <Image 
            className='h-full w-full rounded '
            src={photoes[i].photo}
            width={300}
            height={400}
            alt="Picture of the project"
          />
          {/* <img  src={photo+`${i}`} /> */}
              </div>
            </PinContainer>
          </div>
          ))
      }
       
    
   
        {/* --------------------------------------------- */}
       
    </div>
    </>
    
  )
}

export default Projects