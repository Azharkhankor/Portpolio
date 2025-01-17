import React from 'react'
import { NavLink} from 'react-router-dom';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


const About = () => {
  return (
    <>
    <div className="flex flex-col h-screen w-screen bg-center  bg-cover bg-[url('/Images/background.jpg')] text-white">
        <nav>
        
       
        <div className="   flex flex-1 h-16 w-full  items-center px-4 bg-transparent">
        <div className="flex-1 ">
            <a href="#">
              <h1 className="font-sans text-slate-100  text-2xl justify-start pl-2 font-bold">AzharKhankor.</h1>
            </a>
    
          
    
        </div>
    
          <div className="flex flex-1 justify-end md:hidden">
          <NavLink to ="menu"><FontAwesomeIcon className="text-2xl" icon={faBars} /></NavLink>
          </div>
        
        
          <div className=" hidden md:flex  justify-end pr-4">
            <ul className="flex space-x-12 ">
              <li><a href="#" className="hover:text-slate-300"><NavLink to ='/'>Home </NavLink></a></li>
            </ul>
          </div>
        </div>
        </nav>
        <section className=' flex flex-1 bg-transparent  py-12 pt-24 sm:px-12 lg:px-24 '>
           <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl font-bold text-white text-center ">About Me</h2>
                <p class="text-lg text-white leading-relaxed mt-6 mb-4">
                  <strong>Hi, I’m Azhar Khankor!</strong> I’m a <span class="text-white font-semibold">MERN Stack Web Developer</span> 
                  with a passion for building dynamic, scalable, and efficient web applications. With expertise in 
                  <span class="text-white font-medium">MongoDB, Express.js, React, and Node.js</span>, I create seamless user 
                   experiences and robust backend systems.
                </p>
                <p class="text-lg text-white leading-relaxed mb-4">
                Over the past <span class="text-white font-medium">2 years</span>, I’ve worked on projects ranging from small 
               business websites to full-stack applications with complex APIs and real-time features. I thrive on solving 
               problems with clean, maintainable code and a focus on performance.
               </p>
               <p class="text-lg text-white leading-relaxed mb-4">
               Beyond coding, I enjoy exploring the latest web technologies and contributing to open-source projects. When I’m not 
               at my keyboard, you can find me <span class="text-white font-medium">reading books , playing soccer outdoors or hiking!</span>.
               </p>
               <p class="text-lg text-white leading-relaxed">
               I’m always eager to collaborate on exciting projects and bring ideas to life. Feel free to 
               <a href="#contact" class="text-blue-600 font-semibold hover:underline"> get in touch</a> if you'd like to connect!
               </p>
           </div>
        </section>
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

export default About
