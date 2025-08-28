const pt = {
  header: {
    navLinks: [
      { name: "Sobre", href: "#about" },
      { name: "Projetos", href: "#projects" },
      { name: "Educação", href: "#education" },
      { name: "Contato", href: "#contact" },
    ],
  },
  hero: {
    title1: "Oi, sou",
    title2: "Rhuan Lucas",
    description:
      "Desenvolvedor Frontend apaixonado por criar aplicações web modernas e responsivas utilizando React, Next.js e TypeScript. Adoro transformar ideias de design em interfaces funcionais e amigáveis ao usuário.",
    cta1: "Entre em Contato",
    cta2: "Veja meu Trabalho",
    skillsTitle: "Tecnologias",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "JavaScript",
    ],
  },
  projects: {
    title: "Experiência e Projetos",
    description:
      "Aqui está um resumo da minha jornada profissional e criações pessoais.",
    professional: {
      title: "Experiência Profissional",
      description:
        "Funções e responsabilidades que assumi em capacidade profissional.",
      items: [
        {
          title: "Desenvolvedor Frontend - Embraza Concepts",
          period: "2025 - atualmente",
          description:
            "Liderei o desenvolvimento da landing page da EMBRAZA utilizando React, Next.js, TypeScript e TailwindCSS, implementando um design totalmente responsivo e componentes reutilizáveis. Colaborei com os clientes para alinhar o site à identidade visual da marca, entregando uma experiência web polida e amigável ao usuário. Atualmente finalizando conteúdos e integração com redes sociais.",
          imageUrl: "/embraza.jpg",
          imageHint: "landing page responsiva",
          tags: ["ReactJS", "NextJS", "Typescript", "TailwindCSS", "UI/UX"],
          liveLink: "https://embraza.netlify.app",
        },
        {
          title: "Desenvolvedor Frontend - RHA Engenharia",
          period: "2024 - 2025",
          description:
            "Atuei por 1 ano como desenvolvedor freelancer na RHA Engenharia, criando interfaces para sistemas de monitoramento de hidrelétricas. Convertia protótipos do Figma em aplicações funcionais com ReactJS, HTML e CSS, garantindo design responsivo e boa performance. Os projetos incluíam painéis interativos, gráficos dinâmicos e históricos de inspeções, colaborando de perto com designers e engenheiros para entregar soluções escaláveis e de fácil manutenção.",
          imageUrl: "/RHA.jpg",
          imageHint: "logo da RHA Engenharia",
          tags: ["ReactJS", "HTML", "CSS", "Figma"],
          liveLink: "https://www.rhaengenharia.com.br",
        },
      ],
    },
    personal: {
      title: "Projetos Pessoais",
      description:
        "Uma seleção do meu trabalho. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades.",
      cta: "Ver no GitHub",
      items: [
        {
          title: "Bikecraft",
          description:
            "Bikecraft é um site para loja de bicicletas, desenvolvido com HTML, CSS, PHP e JavaScript, oferecendo navegação responsiva e formulários de contato.",
          imageUrl: "https://github.com/rhuanlucasdev.png",
          imageHint: "github avatar",
          tags: ["HTML", "CSS", "PHP", "JavaScript"],
          liveLink: "https://github.com/rhuanlucasdev/bikecraft",
        },
        {
          title: "SurvivalPlus_NeoForge",
          description:
            "SurvivalPlus_NeoForge é um mod de Minecraft em Java. Embora frontend seja meu foco, participei do projeto para aprender Java e desenvolver interfaces simples, aproveitando a oportunidade para explorar novas tecnologias.",
          imageUrl: "https://github.com/rhuanlucasdev.png",
          imageHint: "github avatar",
          tags: ["JAVA"],
          liveLink: "https://github.com/rhuanlucasdev/SurvivalPlus_NeoForge",
        },
      ],
    },
    cta: "Ver Site",
  },
  education: {
    title: "Educação",
    description: "Minha jornada acadêmica.",
    history: [
      {
        institution: "UNA - Pouso Alegre",
        degree: "Análise e Desenvolvimento de Sistemas",
        period: "2025 - Presente",
        description:
          "Atualmente cursando com foco em desenvolvimento web, cibersegurança e princípios de engenharia de software.",
      },
      {
        institution: "UNIFEI",
        degree: "Bacharelado em Física",
        period: "2019 - 2022",
        description:
          "Cursei bacharelado em física, onde desenvolvi um grande conhecimento em lógica e cálculos complexos, também aprendi Python",
      },
      {
        institution: "CEP - Brazopolis",
        degree: "Curso Técnico em Desenvolvimento Web",
        period: "2017 - 2018",
        description:
          "Concluí um programa abrangente cobrindo tecnologias como Java, HTML, CSS, JavaScript, MySQL, PHP.",
      },
    ],
  },
  contact: {
    title: "Vamos Construir Juntos",
    description:
      "Estou aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer se conectar, sinta-se à vontade para entrar em contato.",
  },
};

export default pt;
