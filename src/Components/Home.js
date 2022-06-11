import React from 'react'
import Hero from './Hero'
import Technology from './Technology'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
const Home=()=>{
    return (
        <div className='Home'>
           <Hero/>
           <About/>
           <Technology/>
           <Portfolio/>
           <Contact/>
           
           
        </div>
    )
}


export default Home