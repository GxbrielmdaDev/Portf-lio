import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { stores } from "../data/portfolio";

export default function Stores() {
  return (
    <section id="stores" className="py-20 md:py-32 relative">
      <div className="hero-glow bg-emerald-500/10 top-1/2 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span>Lojas</span>
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden group animate-pulse-glow"
            >
              <div className="h-48 relative overflow-hidden bg-dark-3">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-3 left-3 text-white/90 text-lg font-bold font-mono z-10">
                  {store.name.split("-")[0].trim()}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-white font-bold text-lg">{store.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {store.description}
                </p>

                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all text-sm"
                >
                  <FiExternalLink size={16} />
                  Acesse a Loja
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-md mx-auto"
        >
          <div className="glass rounded-xl p-6 text-center border border-dashed border-gray-700">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-dark-4 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-white font-semibold mb-1">Coming Soon</h4>
            <p className="text-gray-500 text-sm">
              Em breve uma nova loja estará disponível neste campo. Fique atento para novidades!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}