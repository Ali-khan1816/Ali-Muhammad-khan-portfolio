import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerData = {
    name: "Ali Muhammad",
    description:
      "A passionate Software Engineer dedicated to building modern and user-friendly web applications.",
    socialLinks: [
      {
        icon: <FaEnvelope />,
        url: "mailto:alimuhammadk360@gmail.com",
        color: "hover:text-blue-500",
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/Ali-khan1816",
        color: "hover:text-blue-500",
      },
      {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/ali-muhammad-khan/",
        color: "hover:text-blue-500",
      },
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/ali_muhammad_khan_official?igsh=MTl1bWZtZGx5ZGt5NA%3D%3D&utm_source=qr",
        color: "hover:text-pink-500",
      },
    ],
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{footerData.name}</h2>
          <p className="text-sm text-gray-400">{footerData.description}</p>
        </div>
        <div className="flex justify-center md:justify-center gap-6 text-2xl">
          {footerData.socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} transition`}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="text-center md:text-right space-y-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-blue-500 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {footerData.name}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
