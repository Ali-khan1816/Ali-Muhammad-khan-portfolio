// Last edited by you@example.com @ 30/09/26 16:14.
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, projectFilters } from "../data/projects";

const Projects = () => {
  const [active, setActive] = useState("All");

  const visibleProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section
      id="projects"
      className="bg-[#101010] text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-center text-6xl font-bold mb-4">Projects</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        A selection of things I have built, from responsive websites to
        processor design in SystemVerilog.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-5 py-2 rounded-full border transition ${
              active === filter
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col bg-[#1a1a1a]/70 border border-gray-500/20 rounded-2xl overflow-hidden shadow-[0_0_20px_#ffffff11] hover:border-blue-500/50 transition"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div
                  className="w-full h-48 flex items-center justify-center text-6xl bg-gradient-to-br from-purple-900/60 via-[#1a1a1a] to-blue-900/40"
                  aria-hidden="true"
                >
                  {project.emoji}
                </div>
              )}

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700/60 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition rounded-xl px-4 py-2 text-sm font-semibold"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-gray-500 hover:border-white transition rounded-xl px-4 py-2 text-sm font-semibold"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
