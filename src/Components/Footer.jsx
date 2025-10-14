import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
   
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Ali Muhammad</h2>
          <p className="text-sm text-gray-400">
            A passionate Software Engineer dedicated to building modern and user-friendly web applications.
          </p>
        </div>

  
        <div className="flex justify-center md:justify-center gap-6 text-2xl">
          <a
            href="mailto:alimuhammadk360@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Ali-khan1816"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-muhammad-khan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ali_muhammad_khan_official?igsh=MTl1bWZtZGx5ZGt5NA%3D%3D&utm_source=qr" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

  
        <div className="text-center md:text-right  md:mr-15 space-y-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#home" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-10 pb-15 md:pt-0 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ali Muhammad. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
