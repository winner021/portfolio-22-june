import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Components/Home'

const App=()=>{
    return(

        <BrowserRouter>
        <Route to="/" component={Home}/>    
        </BrowserRouter> 

    )
 
       
    
}

export default App