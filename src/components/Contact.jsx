import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiCheck, FiLoader } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

const WEBHOOK_URL = "https://discord.com/api/webhooks/1389309775006924880/MUS0gqV0qGhdyKRBGG7I8W3lvYohub9y8t5Q__690qzMaUiUpU1-lqR_o4GhSB4gjUEc";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = {
      nome: form.nome.value,
      email: form.email.value,
      assunto: form.assunto.value,
      mensagem: form.mensagem.value,
    };

    const embed = {
      embeds: [{
        title: `Nova mensagem de ${data.nome}`,
        color: 0x8B5CF6,
        fields: [
          { name: "Nome", value: data.nome, inline: true },
          { name: "Email", value: data.email, inline: true },
          { name: "Assunto", value: data.assunto, inline: false },
          { name: "Mensagem", value: data.mensagem, inline: false },
        ],
        timestamp: new Date().toISOString(),
        footer: { text: "Portfólio - Contato" },
      }],
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(embed),
      });

      if (!res.ok) throw new Error("Falha ao enviar");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const buttonProps = {
    idle: { text: "Enviar Mensagem", icon: FiSend, className: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30" },
    loading: { text: "Enviando...", icon: FiLoader, className: "bg-gradient-to-r from-primary to-secondary text-white opacity-80" },
    success: { text: "Mensagem Enviada!", icon: FiCheck, className: "bg-green-600 text-white" },
    error: { text: "Erro ao enviar. Tente novamente.", icon: FiSend, className: "bg-red-600 text-white" },
  };

  const btn = buttonProps[status];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="hero-glow bg-primary/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span>Contato</span>
          </h2>
          <p className="text-center text-gray-500 -mt-8 mb-12 text-sm max-w-xl mx-auto">
            Caso você queira conversar sobre alguma oportunidade, colaboração ou somente deixar
            um elogio/comentário, fique à vontade para entrar em contato!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: FiMapPin, label: "Localização", value: personalInfo.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{label}</div>
                  {href ? (
                    <a href={href} className="text-sm text-gray-300 hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm text-gray-300">{value}</div>
                  )}
                </div>
              </div>
            ))}

            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Redes Sociais</h4>
              <div className="flex gap-3">
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
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-4 border border-white/5 text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-4 border border-white/5 text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Assunto</label>
                <input
                  type="text"
                  name="assunto"
                  required
                  placeholder="Assunto da mensagem"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-4 border border-white/5 text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Mensagem</label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  placeholder="Sua mensagem..."
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-4 border border-white/5 text-gray-300 text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                className={`w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${btn.className}`}
              >
                <btn.icon size={16} className={status === "loading" ? "animate-spin" : ""} />
                {btn.text}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}