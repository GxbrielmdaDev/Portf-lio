import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="hero-glow bg-accent/10 top-1/3 left-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Meus <span>Projetos</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              layout
            >
                <div
                  onClick={() => setSelected(project)}
                  className="group cursor-pointer glass rounded-xl overflow-hidden card-hover h-full flex flex-col"
                >
                  <div className="h-40 relative overflow-hidden bg-dark-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <span className="absolute bottom-3 left-3 text-white/90 text-lg font-bold font-mono z-10">
                      {project.title.split(" ")[0]}
                    </span>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                        Ver detalhes
                      </span>
                    </div>
                  </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-3">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-dark-4 text-gray-400">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="h-32 relative overflow-hidden bg-dark-3">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-3 left-3 text-white/90 text-xl font-bold font-mono z-10">
                  {selected.title.split(" ")[0]}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                >
                  <FiX size={16} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-white text-xl font-bold">{selected.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {selected.description}
                </p>

                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all text-sm"
                >
                  <FiExternalLink size={16} />
                  {selected.link !== "#" ? "Ver Projeto" : "Em breve"}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}