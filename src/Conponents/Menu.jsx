import React from 'react'
import {  NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Menu = () => {
  return (
    <>
    <div className="flex flex-col h-screen w-screen text-center justify-center font-semibold text-2xl  bg-center bg-cover bg-[url('/Images/background.jpg')] text-white">
      <ul className='space-y-6'>
        <li className='hover:text-slate-300'><a href="#" ><NavLink to ='/'>Home </NavLink></a></li>
        <li className='hover:text-slate-300'><a href="#" ><NavLink to = "about">About</NavLink></a></li>
        <li className='hover:text-slate-300'><a href="#" ><NavLink to ="contact">Contact</NavLink></a></li>
        <li className='hover:text-slate-300'><a href="#" >Github</a></li>
      </ul>
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
}

export default Menu
