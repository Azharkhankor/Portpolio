import React from "react"
import { Route,Routes } from "react-router-dom";
import Home from "./Conponents/Home";
import About from "./Conponents/About";
import Contact from "./Conponents/Contact";
import Menu from "./Conponents/Menu";

function App() {
  

  return (
    <>
   <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="menu" element={ <Menu/> } />
      </Routes>
  </>
  
  )
}

export default App
