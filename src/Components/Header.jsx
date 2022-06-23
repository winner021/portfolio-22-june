import React from 'react'
import"../Styling/css/Style.css"
import logo from "../assest/photos/logo.jpg"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header=()=>{

  const [getHeader,setHeader]=useState("hide")

  const headerHandler=()=>{
    console.log("fgjhgfjhfg")
   if(getHeader==="hide"){
     setHeader("show")
     }
    else{
      setHeader("hide")
    }
  }
    return(
        <div className="header ">
              <div className="Header_container">
            <div className="logo">
               <img src={logo} alt="logo" />
           </div>
           <div className='bars' onClick={()=>headerHandler()}>
           <i class="fa-solid fa-bars"></i>
           </div>
        </div>
        


        <div className={`headers_link ${getHeader}`}>
          
          
            <div className="link">
            <div className="projects">
                <Link to="/projects">projects</Link>
               </div>
              <div className="blogs">
               <Link to="/projects">blogs</Link>
               </div>
               <div className="mail">
               <Link to="/projects">get in touch</Link>
               </div>
            </div>
         
           
            </div>

       
     
       
     
          
            
          
        </div>
      
    )
}
export  default Header