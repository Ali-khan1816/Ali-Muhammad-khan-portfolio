// Last edited by you@example.com @ 30/09/26 22:30.
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaMicrochip,
  FaMemory,
  FaProjectDiagram,
  FaCheckDouble,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiJsonwebtokens,
  SiVercel,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-red-500" />,
        description: "Structured and semantic web pages.",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-sky-400" />,
        description: "Modern, responsive user interfaces.",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
        description: "Interactivity and dynamic features.",
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-400" />,
        description: "Component-based single-page apps.",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
        description: "App Router, server components, dynamic routing.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
        description: "Fast, consistent utility-first styling.",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-purple-400" />,
        description: "Smooth animations and transitions.",
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
        description: "Server-side development and APIs.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
        description: "Databases with MongoDB Atlas and Mongoose.",
      },
      {
        name: "JWT Auth",
        icon: <SiJsonwebtokens className="text-pink-400" />,
        description: "Secure signup, login and protected routes.",
      },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      {
        name: "VS Code",
        icon: <FaGitAlt className="text-orange-500" />,
        description:
          "tailored to capture the unique, interactive developer-theme of your website.",
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
        description: "Version control and clean commit history.",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-gray-200" />,
        description: "Collaboration and project hosting.",
      },
      {
        name: "Vercel",
        icon: <SiVercel className="text-white" />,
        description: "Deploying and hosting live projects.",
      },
    ],
  },
  {
    title: "Hardware & IC Design",
    skills: [
      {
        name: "SystemVerilog",
        icon: <FaMicrochip className="text-amber-400" />,
        description: "RTL design and testbenches.",
      },
      {
        name: "Xilinx Vivado",
        icon: <FaProjectDiagram className="text-amber-400" />,
        description: "Simulation, waveform analysis and debugging.",
      },
      {
        name: "RISC-V",
        icon: <FaMemory className="text-amber-400" />,
        description: "Processor datapath and ISA extensions.",
      },
      {
        name: "Verification",
        icon: <FaCheckDouble className="text-amber-400" />,
        description: "PASS/FAIL tests and corner-case checking.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#101010] text-white py-16 px-6 md:px-16"
    >
      <h2 className="text-center text-6xl font-bold mb-4">Skills</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        The tools and technologies I use to build and ship web applications,
        plus my growing work in digital IC design.
      </p>

      <div className="max-w-7xl mx-auto space-y-14">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6 border-l-4 border-purple-600 pl-3">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#1a1a1a]/60 border border-gray-500/20 rounded-2xl p-5 text-center
                             hover:-translate-y-1 hover:border-purple-500/60 hover:shadow-[0_0_20px_#8400ff33]
                             transition duration-300"
                >
                  <div className="flex justify-center mb-3 text-5xl">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-1">{skill.name}</h4>
                  <p className="text-sm opacity-70">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
