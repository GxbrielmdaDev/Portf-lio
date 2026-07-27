import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiNodedotjs, SiPython, SiReact, SiTailwindcss,
  SiGit, SiGithub, SiFastapi, SiPhp
} from "react-icons/si";

export const personalInfo = {
  name: "Gabriel Almeida",
  role: "Desenvolvedor Frontend",
  description:
    "Comprometido em oferecer e entregar a melhor experiência para diferentes perfis de usuários e projetos escaláveis.",
  about: `Sou um Desenvolvedor Frontend cursando Análise e Desenvolvimento de Sistemas, apaixonado por criar interfaces modernas, responsivas e focadas na experiência do usuário. Tenho domínio sólido do ecossistema web, trabalhando com JavaScript, TypeScript, React e Tailwind CSS.

Além do frontend, construo soluções robustas no backend utilizando Node.js e Python, sempre aplicando princípios de engenharia de software como Clean Code, POO e arquitetura de APIs RESTful. Também já desenvolvi projetos práticos utilizando PHP, C e C# com o intuito de aprender novas tecnologias e frameworks.

Meu foco é o aprendizado contínuo: busco sempre aprimorar a qualidade do meu código e explorar novas ferramentas para entregar soluções eficientes e escaláveis. Acredito profundamente que o bom design, junto a uma tecnologia bem escrita, tem o poder de transformar produtos em experiências incríveis.`,
  email: "gaab.santtos9@gmail.com",
  location: "São Paulo, SP - Brasil",
  social: {
    github: "https://github.com/GxbrielmdaDev",
    instagram: "https://www.instagram.com/gabr1elmda__/",
    linkedin: "https://www.linkedin.com/in/gabrielmdadev/",
  },
  stats: [
    { label: "Projetos", value: 12 },
    { label: "Tecnologias", value: 10 },
    { label: "Experiência (anos)", value: "1 +" },
    { label: "Certificações", value: "5+" },
  ],
  profileImage: "/img/fotoperfil.jpg",
};

export const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
];

export const projects = [
  {
    title: "Boardly",
    description:
      "Boardly é um Sistema completo e moderno de Organização de Tarefas e Anotações Pessoais e Profissionais, desenvolvido para otimizar e organizar a sua produtividade e gerenciamento de seus projetos.",
    tech: ["React", "Vite", "TailwindCSS", "Python", "FastAPI", "SQLAlchemy", "SQLite"],
    gradient: "from-violet-600 to-indigo-600",
    image: "/img/pjt/Boardly.png",
    link: "https://github.com/GxbrielmdaDev/Boardly",
  },
  {
    title: "ATLAS CONTROL",
    description:
      "Sistema completo e moderno de gestão de estoque, desenvolvido para otimizar o controle de produtos, clientes e vendas, proporcionando métricas em tempo real e insights valiosos para tomada de decisões estratégicas.",
    tech: ["React", "Vite", "Python", "FastAPI", "SQLAlchemy", "C#"],
    gradient: "from-violet-600 to-indigo-600",
    image: "/img/pjt/Atlas-Control.png",
    link: "https://github.com/GxbrielmdaDev/Atlas-Control",
  },
  {
    title: "ABNTFlow",
    description:
      "Aplicação SaaS projetada para auxiliar estudantes universitários a formatar trabalhos acadêmicos (TCCs, relatórios, artigos) conforme as normas ABNT. Aceita arquivos PDF e DOCX, processa e retorna o resultado formatado.",
    tech: ["React", "TypeScript", "Vite", "Python", "FastAPI"],
    gradient: "from-emerald-600 to-teal-600",
    image: "/img/pjt/ABNTFlow.png",
    link: "#",
  },
  {
    title: "Starbrax",
    description:
      "Site para uma distribuidora de autopeças especializada em peças e acessórios automotivos. Totalmente responsivo com seções como Home, Quem Somos, Produtos, Representantes e Contato.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    gradient: "from-orange-600 to-red-600",
    image: "/img/pjt/starbrax.png",
    link: "https://starbrax.com/",
  },
  {
    title: "PlannerEdu",
    description:
      "Plataforma educacional integrada para gerenciamento de turmas, alunos, aulas e atividades, com funcionalidades tanto para professores quanto para alunos, incluindo módulo de cálculo de notas e sistema de notificações.",
    tech: ["React", "TypeScript", "Python", "FastAPI"],
    gradient: "from-blue-600 to-cyan-600",
    image: "/img/pjt/planneredu.png",
    link: "https://github.com/GxbrielmdaDev/PlannerEdu",
  },
  {
    title: "TypeScript - Guia",
    description:
      "Guia para iniciantes em TypeScript com exemplos práticos que mostram o uso da tipagem estática, principais funcionalidades e explicações comentadas, com exercícios para BackEnd e FrontEnd (React) e desafios com soluções.",
    tech: ["TypeScript"],
    gradient: "from-blue-500 to-indigo-700",
    image: "/img/pjt/TS.png",
    link: "https://github.com/GxbrielmdaDev/Guia-TypeScript",
  },
  {
    title: "Clínica Veterinária Vetwil",
    description:
      "Site totalmente responsivo feito para uma clínica veterinária com cinco seções, integrando informações da clínica e seus meios de contato.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-green-600 to-emerald-600",
    image: "/img/pjt/clinica.png",
    link: "https://vetwil.netlify.app/",
  },
  {
    title: "Inovatech",
    description:
      "Projeto acadêmico onde criamos uma empresa de tecnologia e desenvolvemos um sistema inteiro em Python para auxiliar pessoas com poucos recursos financeiros a entrarem no mundo tecnológico.",
    tech: ["Python", "HTML", "CSS"],
    gradient: "from-purple-600 to-pink-600",
    image: "/img/pjt/inovatech.webp",
    link: "https://github.com/GxbrielmdaDev/PIM",
  },
  {
    title: "Gerador de Senhas",
    description:
      "Gerador de Senhas feito em JavaScript rodando no console (Node.js) para auxiliar pessoas a criarem senhas fortes e se protegerem no meio digital.",
    tech: ["JavaScript", "Node.js"],
    gradient: "from-yellow-500 to-orange-600",
    image: "/img/pjt/senhas.webp",
    link: "https://github.com/GxbrielmdaDev/GeradorDeSenhas",
  },
  {
    title: "Tela de Login",
    description:
      "Tela de login versátil feita com HTML e CSS, podendo ser utilizada em diversos meios e por empresas de diversos ramos, com fundos de fácil alteração.",
    tech: ["HTML", "CSS"],
    gradient: "from-sky-600 to-blue-600",
    image: "/img/pjt/login.png",
    link: "https://github.com/GxbrielmdaDev/Tela-de-Login",
  },
  {
    title: "Dev'Search",
    description:
      "Projeto acadêmico feito em conjunto com outro dev. Protótipo de uma 'IA' que ajuda Devs de todas as áreas a solucionar problemas e no aprendizado das mais modernas tecnologias.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-rose-600 to-pink-600",
    image: "/img/pjt/devsearch.jpg",
    link: "https://github.com/GxbrielmdaDev/Dev-Search-Projeto",
  },
  {
    title: "DevLinks",
    description:
      "Agregador de links para expor projetos ou conteúdos pessoais ou profissionais. Projeto feito com a RocketSeat no curso Discovery.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-teal-600 to-cyan-600",
    image: "/img/pjt/DevLinks.jpg",
    link: "https://github.com/GxbrielmdaDev/Projeto",
  },
];

export const stores = [
  {
    name: "AutotraX - Loja Oficial",
    description:
      "E-Commerce especializado em peças e acessórios automotivos, oferecendo uma ampla variedade de produtos para diferentes modelos de veículos. Loja criada com Loja Integrada, tema personalizado, integração de métodos de pagamento e envios.",
    gradient: "from-blue-600 to-violet-600",
    image: "/img/shop/Autotrax.png",
    link: "https://www.autotraxweb.com.br",
  },
];
