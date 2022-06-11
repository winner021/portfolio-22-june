import React from 'react'
import "../Styling/css/Style.css"
import Myimage from "../assest/photos/Myimage.jpeg"
const About=()=>{
return(
    <div className='About_container'>
        
        <div className="About_cont">
            <div className="image">
                <img src={Myimage} alt="" />
            </div>
            <div className="para">
            <h2>
            Know More About Me
        </h2>
        <p>
        Hi,Thanks for giving your time and stoping by, My name is Pranjul and I Am a Web Developer based out in India.I love to develop and working on new concepts every day.Studying and learning about new technologies are the things that excites me the most.Currently I am using reactJs for frontend
        </p>
        <p>
         In my personal life I love to interact with people and to gain valuable insights and knowledge from there experience . Marjorly I spend all of My day on learning new Web devlopnment technologies and other then that I love to listen music and love to play musical instrunments.Other then that i live
        </p>
              
            </div>
        </div>
    </div>
)    

}

export default About