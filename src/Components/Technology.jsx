import React from 'react'
import "../Styling/css/Style.css"
import technology from "../assest/photos/technology.svg"

const Technology=()=>{
    return(
        <div className='technology_container'>
       <div className="content">
           <h1>My Current Tech Stack</h1>
           <div className="Content-container">
               <div className="txt">
                 <div className="grid">
                     <div className="tech">
                     <i class="fa-brands fa-react"></i>
                     </div>
                     <div className="tech">
                     <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg" alt="" />
                     </div>
                     <div className="tech">
                     <i class="fa-brands fa-sass"></i>
                     </div>
                 </div>
                 <div className="grid">
                     <div className="tech">
                     <i class="fa-brands fa-css3"></i>
                     </div>
                     <div className="tech">
                     <i class="fa-brands fa-html5"></i>
                     </div>
                     <div className="tech">
                     <i class="fa-brands fa-js"></i>
                     </div>
                 </div>
               </div>
               <div className="img">
                 <img src={technology} alt="image" />
               </div>
           </div>
       </div>
    


        </div>
    )
}

export default Technology