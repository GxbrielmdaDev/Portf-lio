import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="hero-glow bg-secondary/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span>Tecnologias</span>
          </h2>
          <p className="text-center text-gray-500 -mt-8 mb-12 text-sm">
            Tecnologias que utilizo no dia a dia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-default group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}08)`,
                  border: `1px solid ${skill.color}30`,
                }}
              >
                <skill.icon
                  style={{ color: skill.color }}
                  size={28}
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                {skill.name}
              </span>

              <div className="w-full h-1 rounded-full bg-dark-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}