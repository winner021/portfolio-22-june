import React from 'react'
import"../Styling/css/Style.css"
import video from"../assest/video/heroVideo.mp4"
import Header from './Header'
import { useEffect } from 'react'
import Typed from 'react-typed';
import sound from "../assest/video/sound.mp3"


const Hero=()=>{

    useEffect(()=>{
      

    },[])
    return(
        <div className='Hero'>
            <video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
</video>

<div class="content">
<audio controls>
  <source src={sound} type="audio/ogg" />

</audio>
<Header/>



<div className="content_container">

<div className="main">
    <div className='hi'>
    <span>H</span>
    <span>i,</span>
    </div>
    <div className='name_Container'>
    <div >
    <span>I</span>
    <span>'</span>
    <span>m</span>
   </div>

     <div>
     <span>P</span>
    <span>r</span>
    <span>a</span>
    <span>n</span>
    <span>j</span>
    <span>u</span>
    <span>l</span>
     </div>
     <div>
     <span>S</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
    <span>h</span>
     </div>

    </div>  
    <div className="about">
     frontend developer(React Js)
    </div> 
</div>


<div className="txt">
<Typed
                    strings={[
                        ' ReactJs',
                         "Redux",
                        'JavaScript',
                        'Sass',
                        "css",
                        "Html",
                    ]}
                        backSpeed={100}
                    typeSpeed={100}
                    loop
                    
                    
                />
<br/>



</div>

</div>

</div>
 </div>

        
    )
}
export  default Hero