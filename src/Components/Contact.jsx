import React from 'react'
import "../Styling/css/Style.css"
import p4 from "../assest/photos/p4.jpg"

const Contact=()=>{
return(
    <div className="Contact">
        <div className="Contact_container">
            <h1>
            Contact me/Hire Me
            </h1>
           <div className="grid">
               <div className="social">
                   <div className="icon">
                    <a href="https://github.com/winner021">
                    <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/pranjul-singh-6b9a31191/" style={{textdecoraion:"none"}}>  <i class="fa-brands fa-linkedin"></i></a>
                   
                 
                   </div>
                  
               </div>
               <div className="contact">
                 <div className="email">
                   Email: pranjul021@gmail.com
                 </div>
                 <br />
                 <div className="phone">
                  Phone: +91 9520719696
                 </div>
                
               </div>
             
           </div>
           
        </div>
        
    </div>
)
}

export default Contact