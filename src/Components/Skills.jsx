import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import MagicBento from './MagicBento'

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className='text-red-500 text-6xl' />,
      description: "Building structured and semantic web pages.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className='text-blue-950 text-6xl' />,
      description: "Styling modern and responsive user interfaces.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className='text-yellow-400 text-6xl' />,
      description: "Adding interactivity and dynamic features.",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-6xl" />,
      description: "Building modern single-page applications.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-6xl" />,
      description: "Server-side development and APIs.",
    },
  ];

  return (
    <section className='bg-[#101010] text-white py-16'>
      <h2 className='text-center text-6xl font-bold mb-20'>Skills</h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center px-4 pb-3'>
        {skills.map((skill, index) => (
          <MagicBento
            key={index}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          >
            <div className='bg-[#1a1a1a]/60 shadow-[0_4px_20px_#101010] rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300'>
              <div className='flex justify-center mb-3'>{skill.icon}</div>
              <h3 className='font-bold text-2xl'>{skill.name}</h3>
              <p className='opacity-70'>{skill.description}</p>
            </div>
          </MagicBento>
        ))}
      </div>
    </section>
  )
}

export default Skills
