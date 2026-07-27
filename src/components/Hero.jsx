import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

const roles = [
  "Desenvolvedor Frontend",
  "React Developer",
  "UI Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-glow bg-primary top-1/4 -left-20" />
      <div className="hero-glow bg-secondary bottom-1/4 -right-20" />
      <div className="hero-glow bg-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6"
          >
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/30 shadow-xl shadow-primary/20"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            Olá, meu nome é
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="h-10 md:h-12 flex items-center justify-center mb-6">
            <span className="text-xl md:text-3xl text-gray-300 font-mono">
              {displayText}
              <span className="animate-pulse ml-1 text-primary">|</span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Fale Comigo!
            </a>

            <a
              href="#projects"
              className="px-6 py-3 glass-light text-gray-300 font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            {[
              { icon: FiGithub, href: personalInfo.social.github },
              { icon: FiLinkedin, href: personalInfo.social.linkedin },
              { icon: FiInstagram, href: personalInfo.social.instagram },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full glass-light text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}