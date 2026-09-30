// Last edited by you@example.com @ 30/09/26 16:19.
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { siteData } from "../data/siteData";

const footerData = {
  name: siteData.name,
  description:
    "A passionate Software Engineer dedicated to building modern and user-friendly web applications.",
  socialLinks: [
    {
      label: "Email",
      icon: <FaEnvelope />,
      url: `mailto:${siteData.email}`,
      color: "hover:text-blue-500",
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      url: siteData.socials.github,
      color: "hover:text-blue-500",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      url: siteData.socials.linkedin,
      color: "hover:text-blue-500",
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      url: siteData.socials.instagram,
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

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{footerData.name}</h2>
          <p className="text-sm text-gray-400">{footerData.description}</p>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          {footerData.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`${item.color} transition`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right space-y-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {footerData.quickLinks.map((link) => (
              <li key={link.name}>
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
