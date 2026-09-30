// Last edited by you@example.com @ 30/09/26 22:25.
// src/data/projects.js
import pizzaWizzaImage from "../assets/projects/pizzaStore.png";
import eStoreImage from "../assets/projects/eStore.png";
import comsatsAbbottabadImage from "../assets/projects/comsatsTailwind.png";
import comsatsRedesignImage from "../assets/projects/comsatsCSS.png";
import insaneImage from "../assets/projects/insane.jpeg";
import riscvImage from "../assets/projects/riscv.png";
export const projectFilters = ["All", "Full-Stack", "Frontend", "Hardware"];

export const projects = [
  {
    id: 0,
    title: "Pizza Wizza Store",
    category: "Full-Stack",
    emoji: "🍕",
    image: pizzaWizzaImage,
    description:
      "A full-stack pizza ordering web app with signup and login, JWT authentication, and an admin dashboard with CRUD operations and order management.",
    tech: [
      "React.js",
      "Next.js",
      "MongoDB Atlas",
      "Mongoose",
      "Tailwind CSS",
      "JWT",
      "Vercel",
    ],
    live: "https://pizza-wizza-store.vercel.app/", // deploy hone ke baad yahan link likhein
    github: "https://github.com/Ali-khan1816/pizza-wizza-store", // GitHub repo ka link yahan likhein
  },
  {
    id: 1,
    title: "E-Store",
    category: "Frontend",
    emoji: "🛒",
    image: eStoreImage,
    description:
      "A clean, fully responsive e-commerce frontend with a product listing page, dynamic product detail pages and a mobile-friendly category sidebar.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    live: "https://lnkd.in/dSKGwCMH",
    github: "https://lnkd.in/dEXcsfR9",
  },
  {
    id: 2,
    title: "COMSATS Abbottabad Website",
    category: "Frontend",
    emoji: "🎓",
    image: comsatsAbbottabadImage,
    description:
      "University website first built with plain CSS and then rebuilt with Tailwind CSS for better responsiveness and a modern design.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    live: "https://lnkd.in/gj3TkCnr",
    github: "https://lnkd.in/gkt5AJzg",
  },
  {
    id: 3,
    title: "COMSATS University Redesign",
    category: "Frontend",
    emoji: "✨",
    image: comsatsRedesignImage,
    description:
      "A modern university website with Home, About, Campus, Testimonials and Contact sections, smooth animations and reusable React components.",
    tech: ["React", "CSS", "Framer Motion", "Vercel"],
    live: "https://lnkd.in/gMSCKxju",
    github: "https://lnkd.in/gZ3SP9y5",
  },
  {
    id: 4,
    title: "Inance Website",
    category: "Frontend",
    emoji: "🌐",
    image: insaneImage,
    description:
      "A clean, responsive and user-friendly website designed with pure HTML and CSS.",
    tech: ["HTML", "CSS"],
    live: null, // Vercel par deploy hone ke baad yahan link likhein
    github: "https://lnkd.in/gcTJhCVi",
  },
  {
    id: 5,
    title: "RV32M RISC-V Processor",
    category: "Hardware",
    emoji: "🔧",
    image: riscvImage,
    description:
      "RV32I processor extended with the RISC-V M extension (MUL, MULH, MULHSU, MULHU, DIV, DIVU, REM, REMU) with a multi-cycle divider, write-back integration and SystemVerilog testbenches covering corner cases like division by zero.",
    tech: ["SystemVerilog", "Xilinx Vivado", "RISC-V", "Verification"],
    live: null,
    github: "https://lnkd.in/ddCVYvet",
  },
];
