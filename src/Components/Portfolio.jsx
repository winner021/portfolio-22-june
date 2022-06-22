import React from 'react'
import "../Styling/css/Style.css"
import p1 from "../assest/photos/p1.jpg"
import p2 from "../assest/photos/p2.jpg"
import p3 from "../assest/photos/p3.jpg"
const Portfolio=()=>{
return(
    <div className='Portfolio'>
        <h1>
            Portfolio 

        </h1>
        <div className="content">
            <div className="grid_one">
            <a href="https://luxerio.netlify.app/">
               <div className="card">
                   <div className="card_image">
                       <img src={p1} alt="" />
                   </div>
                  
                   <div className="Project_detail port ">
                       <div className="Project">
                          Luxerio
                       </div>
                       <div className="tech">
                       Created with : React Js,React Router,Sass,redux,Redux-thunk,Google auth,Rest Api
                       </div>
                   </div>
                   
                  
               </div>
            </a>
               <a href="https://thecanarysongs.netlify.app">
               <div className="card">
               <div className="card_image">
                       <img src={p2} alt="" />
                   </div>
                   <div className="Project_detail port ">
                       <div className="Project">
                          Canary
                       </div>
                       <div className="tech">
                       Created with : React Js,React router,Sass,redux,Redux-thunk,Spotify Api
                       </div>
                   </div>
                   

               </div>
               </a>
              
            </div>
            <div className="grid_two">
                <a href="https://pranjulsingh.netlify.app">
                <div className="card">
                   <div className="card_image">
                       <img src={p3} alt="" />
                   </div>
                   <div className="Project_detail port ">
                       <div className="Project">
                          Portfolio
                       </div>
                       <div className="tech">
                       Created with : React Js,React Router,Sass
                       </div>
                   </div>
               </div>
                </a>

             
            </div>
        </div>
    </div>
)
}


export default Portfolio