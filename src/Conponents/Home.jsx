import React from "react"
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF}from '@fortawesome/free-brands-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import image from "/Images/image1.jpg";


function Home() {
  

  return (
    <>
    <div className="flex flex-col h-screen w-screen bg-center bg-cover bg-[url('/Images/background.jpg')] text-white">
    <nav>
    
   
    <div className="   flex flex-1 h-16 w-full  items-center px-4 bg-transparent">
    <div className="flex-1 ">
        <a href="#">
          <h1 className="font-sans text-slate-100  text-2xl justify-start  font-bold">AzharKhankor.</h1>
        </a>

      

    </div>

      <div className="flex flex-1 justify-end md:hidden">
      <NavLink to="menu"><FontAwesomeIcon className="text-2xl" icon={faBars} /></NavLink>
      </div>
    
    
      <div className=" hidden md:flex  justify-end pr-4">
        <ul className="flex space-x-12 ">
          <li><a href="#" className="hover:text-slate-300"><NavLink to ='/'>Home </NavLink></a></li>
          <li><a href="#" className="hover:text-slate-300"> <NavLink to = "about">About</NavLink></a></li>
          <li><a href="#" className="hover:text-slate-300"><NavLink to ="contact">Contact</NavLink></a></li>
          <li><a href="#" className="hover:text-slate-300">Github</a></li>
        </ul>
      </div>
    </div>
    </nav>
    
    <div className="flex-1 flex flex-col items-center justify-center">
      <img src={image} alt="" className="h-52 w-52 rounded-full mb-6"/>
      <h3 className="text-2xl font-semibold">Welcome</h3>
      <h1 className="text-4xl font-bold pt-3"> Azhar Khankor</h1>
      <h5 className="font-semibold text-lg pt-4">I,m a MERN stack web developer, i turn imaginations and ideas into realities!</h5>
      <div className="flex flex-row space-x-3 pt-4" ><a href="#">
      <FontAwesomeIcon className="hover:text-gray-300" icon={ faTwitter }  /></a>
      <a href="#">
      <FontAwesomeIcon className="hover:text-gray-300" icon={ faFacebookF }  /></a>
      <a href="#">
      <FontAwesomeIcon className="hover:text-gray-300" icon={ faGithub }  /></a>
      </div>
    </div>

  </div>

  <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="flex-1 text-center md:text-left ">
          <h2 className="text-2xl font-bold ">Azhar Khankor</h2>
          <p className="mt-2  text-gray-400">
            A MERN stack web developer turning ideas into reality with clean and efficient code.
          </p>
        </div>

        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-center md:text-left">Quick Links</h3>
          <ul className="mt-4 flex flex-col space-y-2 text-center md:text-left">
            <li>
              <a href="#about" className="hover:text-gray-300"><NavLink to ='/'>Home </NavLink></a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300"><NavLink to = "about">About</NavLink></a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300"><NavLink to ="contact">Contact</NavLink></a>
            </li>
          </ul>
        </div>

        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-center md:text-left">Connect</h3>
          <div className="mt-4 flex justify-center md:justify-start space-x-6">
            <a href="https://github.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 py-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Azhar Khankor. All rights reserved.
      </div>
    </footer>
  </>
  
  )
};

export default Home
