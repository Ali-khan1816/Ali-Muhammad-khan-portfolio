import React from "react";
import LiquidChrome from "./LiquidChrome";
import font from "../assets/font.jpg";
import responsive from "../assets/responsive.jpg";
import ecommerce_img from "../assets/ecommerce.jpg";
import UI from "../assets/UI.jpg";

const Services = () => {
  const services = [
    {
      name: "Website Development",
      img: <img className="rounded-4xl" src={UI} alt="UI Design" />,
      discription:
        "Building modern, dynamic, and fully functional websites tailored to client needs.",
    },
    {
      name: "Front-End Development",
      img: <img className="rounded-4xl" src={font} alt="Frontend Development" />,
      discription:
        "Creating interactive, user-friendly interfaces using HTML, CSS, JavaScript, and React.",
    },
    {
      name: "Responsive Design",
      img: <img className="rounded-4xl" src={responsive} alt="Responsive Design" />,
      discription:
        "Designing websites that adapt seamlessly to mobile, tablet, and desktop devices.",
    },
    {
      name: "E-Commerce Development",
      img: <img className="rounded-4xl" src={ecommerce_img} alt="E-Commerce" />,
      discription:
        "Developing secure and scalable online stores with smooth checkout and payment integration.",
    },
  ];

  return (
    <>
      <section id="services" className="relative text-white py-16 overflow-hidden">
    
        <div className="absolute inset-0 z-0">
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#2a2a2a] opacity-95"></div>
          <LiquidChrome baseColor={[0.9, 0.9, 0.9]} speed={1.1} amplitude={0.5} interactive />
        </div>

        <div className="relative z-10">
          <h1 className="text-center font-bold text-6xl pb-3 text-gray-200 drop-shadow-lg">
            Services
          </h1>
          <p className="text-center pb-20 text-gray-400">
            Building interactive, responsive, and high-performance digital experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="hover:scale-110 transition-transform duration-300 
                           bg-[#1a1a1a]/70 backdrop-blur-md border border-gray-500/20 
                           p-5 rounded-2xl shadow-[0_0_20px_#ffffff22]"
              >
                <div className="justify-items-center">{service.img}</div>
                <h3 className="text-center font-bold text-2xl py-2 text-gray-100">
                  {service.name}
                </h3>
                <p className="opacity-80 text-center py-4 text-gray-300">
                  {service.discription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#111] via-[#1c1c1c] to-[#2b2b2b] text-white py-16 px-6 sm:px-10 md:px-20 text-center">
        <h2 className="text-5xl sm:text-4xl font-bold mb-6 text-gray-100">Why Me?</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          I believe in writing clean, maintainable code and delivering real-world solutions that make a difference.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1b1b1b]/80 rounded-2xl p-6 hover:scale-105 transition-transform border border-gray-500/20 shadow-[0_0_15px_#ffffff22]">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">💡 Problem Solver</h3>
            <p className="text-gray-400 text-sm">
              I enjoy analyzing problems and creating efficient software solutions using modern technologies.
            </p>
          </div>
          <div className="bg-[#1b1b1b]/80 rounded-2xl p-6 hover:scale-105 transition-transform border border-gray-500/20 shadow-[0_0_15px_#ffffff22]">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">⚙️ Strong Technical Skills</h3>
            <p className="text-gray-400 text-sm">
              Experienced in full-stack development with JavaScript, React, and backend integration.
            </p>
          </div>
          <div className="bg-[#1b1b1b]/80 rounded-2xl p-6 hover:scale-105 transition-transform border border-gray-500/20 shadow-[0_0_15px_#ffffff22]">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">🚀 Passion for Learning</h3>
            <p className="text-gray-400 text-sm">
              Always exploring new tools and technologies to improve my craft and stay ahead in the tech world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
