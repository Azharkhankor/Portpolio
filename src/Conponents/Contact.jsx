import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub ,faLinkedin ,faTwitter} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-center bg-cover bg-[url('/Images/background.jpg')] text-white">
        
        <nav>
          <div className="flex flex-1 h-16 w-full items-center px-4 bg-transparent">
            <div className="flex-1">
              <a href="#">
                <h1 className="font-sans text-slate-100 text-2xl justify-start pl-2 font-bold">AzharKhankor.</h1>
              </a>
            </div>

            <div className="flex flex-1 justify-end md:hidden">
              <NavLink to = "menu"><FontAwesomeIcon className="text-2xl" icon={faBars} /></NavLink>
            </div>
            <div className="hidden md:flex justify-end pr-4">
              <ul className="flex space-x-12">
                <li>
                  <a href="#" className="hover:text-slate-300">
                  <NavLink to ='/'>Home </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


     <section id="contact" className=" flex flex-1 bg-transparent  py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
        <p className="text-white text-center mb-6 font-semibold text-lg">
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <form
          action=""
          method="POST"
          className="bg-transparent rounded-lg p-6 sm:p-8"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
   </div>    
        <footer className="bg-gray-900 text-white mt-auto">
          <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">Azhar Khankor</h2>
              <p className="mt-2 text-gray-400">
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
  );
};

export default Contact;
