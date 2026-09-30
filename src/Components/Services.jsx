// Last edited by you@example.com @ 30/09/26 22:37.
import LiquidChrome from "./LiquidChrome";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaUserShield,
  FaShoppingCart,
  FaChartLine,
  FaCloudUploadAlt,
} from "react-icons/fa";

const servicesData = [
  {
    name: "Full-Stack Web Apps",
    icon: <FaLaptopCode />,
    description:
      "End-to-end web applications built with Next.js, React and Node.js, from the interface to the database.",
  },
  {
    name: "Frontend Development",
    icon: <FaReact />,
    description:
      "Responsive, interactive interfaces using React, Next.js and Tailwind CSS that look great on every device.",
  },
  {
    name: "Backend & API Development",
    icon: <FaServer />,
    description:
      "Clean server-side logic and APIs with Node.js that power your app reliably.",
  },
  {
    name: "Database Design",
    icon: <FaDatabase />,
    description:
      "Well-structured MongoDB databases with Mongoose models, built for growth.",
  },
  {
    name: "Authentication & Security",
    icon: <FaUserShield />,
    description:
      "Secure signup, login and role-based access using JWT authentication.",
  },
  {
    name: "E-Commerce Development",
    icon: <FaShoppingCart />,
    description:
      "Online stores with product catalogs, carts and order management, from customer view to admin side.",
  },
  {
    name: "Admin Dashboards",
    icon: <FaChartLine />,
    description:
      "Custom dashboards with full CRUD operations and order management so you control your data easily.",
  },
  {
    name: "Deployment & Hosting",
    icon: <FaCloudUploadAlt />,
    description:
      "Taking your project live on Vercel with proper environment setup and Git-based updates.",
  },
];

const processData = [
  {
    step: "01",
    title: "Discuss",
    text: "We talk about your idea, goals and requirements so I understand exactly what you need.",
  },
  {
    step: "02",
    title: "Design",
    text: "I plan the structure and layout, and we agree on the look and features before building.",
  },
  {
    step: "03",
    title: "Build",
    text: "I develop the frontend, backend and database, sharing progress along the way.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "I test, deploy your project live and make sure everything works smoothly.",
  },
];

const whyMeData = [
  {
    title: "💡 Problem Solver",
    text: "I enjoy analyzing problems and creating efficient software solutions using modern technologies.",
  },
  {
    title: "⚙️ Strong Technical Skills",
    text: "Experienced in full-stack development with JavaScript, React, and backend integration.",
  },
  {
    title: "🚀 Passion for Learning",
    text: "Always exploring new tools and technologies to improve my craft and stay ahead in the tech world.",
  },
];

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="relative text-white py-16 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#2a2a2a] opacity-95"></div>
          <LiquidChrome
            baseColor={[0.9, 0.9, 0.9]}
            speed={1.1}
            amplitude={0.5}
            interactive
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-center font-bold text-6xl pb-3 text-gray-200 drop-shadow-lg">
            Services
          </h1>
          <p className="text-center pb-16 text-gray-400">
            Building interactive, responsive, and high-performance digital
            experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-10 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service) => (
              <div
                key={service.name}
                className="hover:scale-105 transition-transform duration-300
                           bg-[#1a1a1a]/70 backdrop-blur-md border border-gray-500/20
                           p-6 rounded-2xl shadow-[0_0_20px_#ffffff22] text-center"
              >
                <div className="flex justify-center text-5xl text-purple-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl pb-2 text-gray-100">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm opacity-80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101010] text-white py-16 px-6 sm:px-10 md:px-20 text-center">
        <h2 className="text-5xl sm:text-4xl font-bold mb-4 text-gray-100">
          How I Work
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          A simple, transparent process from the first conversation to a live
          product.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processData.map((item) => (
            <div
              key={item.step}
              className="bg-[#1b1b1b]/80 rounded-2xl p-6 border border-gray-500/20 text-left"
            >
              <span className="text-4xl font-bold text-purple-500">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-200">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#111] via-[#1c1c1c] to-[#2b2b2b] text-white py-16 px-6 sm:px-10 md:px-20 text-center">
        <h2 className="text-5xl sm:text-4xl font-bold mb-6 text-gray-100">
          Why Me?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          I believe in writing clean, maintainable code and delivering
          real-world solutions that make a difference.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyMeData.map((item) => (
            <div
              key={item.title}
              className="bg-[#1b1b1b]/80 rounded-2xl p-6 hover:scale-105 transition-transform border border-gray-500/20 shadow-[0_0_15px_#ffffff22]"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-200">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
