import React from 'react'
import home_icon from '../assets/home-icon.png'
import about_icon from '../assets/about-icon.png'
import resume_icon from '../assets/resume-icon.png'
import services_icon from '../assets/services-icon.png'
import contact_icon from '../assets/contact-icon.png'

const Navbar = () => {

    const navItems = [
                      {id: 1, name:'Home',  icon:home_icon, link:'#home' },
                      {id: 2, name:'About', icon:about_icon, link:'#about'},
                      {id: 3, name:'Resume', icon:resume_icon, link:'/AliMuhammadCV.pdf', download:true},
                      {id: 4, name:'Services', icon:services_icon, link:'#services'},
                      {id: 5, name:'contact', icon:contact_icon, link:'#contact'}
                      ]
     return (
    <nav
      className='fixed bottom-0 left-0 w-full flex justify-around py-2 px-2 
                 bg-gray-800/50 backdrop-blur-md shadow-lg rounded-t-2xl
                 md:bottom-0 md:left-0 md:w-full md:rounded-t-2xl
                 lg:top-1/2 lg:right-6 lg:left-auto lg:bottom-auto lg:flex lg:flex-col 
                 lg:-translate-y-1/2 lg:w-auto lg:rounded-2xl lg:space-y-6 lg:py-3 lg:px-4 z-50 
                 scroll-smooth'   
    >
      {navItems.map((item) => (
        <a key={item.id}
          href={item.link}
          {...(item.download ? {download: item.link} : {})}
          className='flex flex-col items-center text-white hover:text-blue-400 transition'
        >
          <img  className='w-8 h-8 filter invert brightness-0'
          src={item.icon}
          alt={item.name} />
          <span className='text-xs sm:text-sm hover:font-bold py-1'>{item.name}</span>
        </a>
      ))}
      
     
      {/* <a href='#home' className='flex flex-col items-center text-white hover:text-blue-400 transition'>
        <img className='w-8 h-8 filter invert brightness-0' src={home_icon} alt="Home"/>
        <span className='text-xs sm:text-sm hover:font-bold py-1'>Home</span>
      </a>

      <a href='#about' className='flex flex-col items-center text-white hover:text-blue-400 transition'>
        <img className='w-8 h-8 filter invert brightness-0' src={about_icon} alt="About"/>
        <span className='text-xs sm:text-sm hover:font-bold py-1'>About</span>
      </a>

      <a href="/AliMuhammadCV.pdf" download="AliMuhammadCV.pdf" className='flex flex-col items-center text-white hover:text-blue-400 transition'>
        <img className='w-8 h-8 filter invert brightness-0' src={resume_icon} alt="Resume"/>
        <span className='text-xs sm:text-sm hover:font-bold py-1'>Resume</span>
      </a>

      <a href='#services' className='flex flex-col items-center text-white hover:text-blue-400 transition'>
        <img className='w-8 h-8 filter invert brightness-0' src={services_icon} alt="Services"/>
        <span className='text-xs sm:text-sm hover:font-bold py-1'>Services</span>
      </a>

      <a href='#contact' className='flex flex-col items-center text-white hover:text-blue-400 transition'>
        <img className='w-8 h-8 filter invert brightness-0' src={contact_icon} alt="Contact"/>
        <span className='text-xs sm:text-sm hover:font-bold py-1'>Contact</span>
      </a> */}
    </nav>
  )
}

export default Navbar
