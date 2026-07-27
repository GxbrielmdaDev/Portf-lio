import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

const quickLinks = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Tecnologias", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold font-mono text-gradient mb-3">
              {`<${personalInfo.name.split(" ")[0]} />`}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Desenvolvedor Frontend comprometido em oferecer a melhor experiência para diferentes perfis de usuários e projetos escaláveis.
            </p>
          </div>

          <div>
            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-semibold">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-semibold">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.location}</li>
            </ul>

            <div className="flex gap-3 mt-4">
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
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Feito com <FiHeart className="text-accent" size={12} /> por {personalInfo.name.split(" ")[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}