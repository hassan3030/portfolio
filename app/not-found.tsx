"use client"
import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";

import { useRouter } from 'next/navigation'
import './not-found.css'

const NotFound = () => {
    const router = useRouter()
  return (
    <div>
        
        <div className="container">
	
	<div  className="error">
		<p className="p">4</p>
		<span className="dracula">			
			<div className="con">
				<div className="hair"></div>
				<div className="hair-r"></div>
				<div className="head"></div>
    		<div className="eye"></div>
    		<div className="eye eye-r"></div>
  			<div className="mouth"></div>
  			<div className="blod"></div>
  			<div className="blod blod2"></div>
			</div>
		</span>
		<p className="p">4</p>
		
		<div className="page-ms">
			<p className="page-msg"> Oops, the page you're looking for Disappeared </p>
			<button className="go-back" onClick={() => router.push('/')}><IoArrowBackCircle className='inline text-3xl'/>Go Back</button>
		</div>
</div>
	</div>

    </div>
  )
}

export default NotFound