import { motion } from "framer-motion";
import { FiUser, FiCode, FiAward, FiBookOpen } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

const statIcons = [FiCode, FiAward, FiUser, FiBookOpen];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="hero-glow bg-primary/10 top-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Sobre <span>Mim</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-8 h-8 rounded-full object-cover border border-primary/40"
                />
                <span className="text-sm font-mono text-primary">/about</span>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
                {personalInfo.about.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            {personalInfo.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
