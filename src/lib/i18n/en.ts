const en = {
  header: {
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" },
    ],
  },
  hero: {
    title1: "Hi, I'm",
    title2: "Rhuan Lucas",
    description:
      "Frontend Developer passionate about building modern, responsive web applications using React, Next.js, and TypeScript. I love turning design ideas into functional, user-friendly interfaces.",
    cta1: "Get In Touch",
    cta2: "View My Work",
    skillsTitle: "Technologies",
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
    title: "Experience & Projects",
    description:
      "Here's a look at my professional journey and personal creations.",
    professional: {
      title: "Professional Experience",
      description:
        "Roles and responsibilities I have taken on in a professional capacity.",
      items: [
        {
          title: "Frontend Developer for Embraza Concepts",
          period: "2025 - now",
          description:
            "Led the development of the EMBRAZA landing page using React, Next.js, TypeScript, and TailwindCSS, implementing a fully responsive design and reusable components. Collaborated with clients to align the site with the brand’s visual identity and delivered a polished, user-friendly web experience. Currently finalizing content and social media integration.",
          imageUrl: "/embraza.jpg",
          imageHint: "responsive landing page",
          tags: ["ReactJS", "NextJS", "Typescript", "TailwindCSS", "UI/UX"],
          liveLink: "https://embraza.netlify.app",
        },
        {
          title: "Frontend Developer - RHA Engenharia",
          period: "2024 - 2025",
          description:
            "I worked for a year as a freelance developer at RHA Engenharia, creating interfaces for hydroelectric power plant monitoring systems. I converted Figma prototypes into functional applications with ReactJS, HTML, and CSS, ensuring responsive design and good performance. Projects included interactive dashboards, dynamic charts, and inspection logs, collaborating closely with designers and engineers to deliver scalable and maintainable solutions.",
          imageUrl: "/RHA.jpg",
          imageHint: "logo da RHA Engenharia",
          tags: ["ReactJS", "HTML", "CSS", "Figma"],
          liveLink: "https://www.rhaengenharia.com.br",
        },
      ],
    },
    personal: {
      title: "Personal Projects",
      description:
        "A selection of my work. I'm always looking for new challenges and opportunities to grow my skills.",
      cta: "View on GitHub",
      items: [
        {
          title: "Bikecraft",
          description:
            "Bikecraft is a bicycle shop website built with HTML, CSS, PHP, and JavaScript, featuring responsive navigation and contact forms.",
          imageUrl: "https://github.com/rhuanlucasdev.png",
          imageHint: "github avatar",
          tags: ["HTML", "CSS", "PHP", "JavaScript"],
          liveLink: "https://github.com/rhuanlucasdev/bikecraft",
        },
        {
          title: "SurvivalPlus_NeoForge",
          description:
            "SurvivalPlus_NeoForge is a Minecraft mod in Java. While frontend is my main focus, I joined the project to learn Java and build simple interfaces, using the opportunity to explore new technologies.",
          imageUrl: "https://github.com/rhuanlucasdev.png",
          imageHint: "github avatar",
          tags: ["JAVA"],
          liveLink: "https://github.com/rhuanlucasdev/SurvivalPlus_NeoForge",
        },
      ],
    },
    cta: "View Live Site",
  },
  education: {
    title: "Education",
    description: "My academic journey.",
    history: [
      {
        institution: "UNA - Pouso Alegre",
        degree: "Systems Analysis and Development",
        period: "2025 - Present",
        description:
          "Currently pursuing a degree with a focus on web development, cybersecurity and software engineering principles.",
      },
      {
        institution: "UNIFEI",
        degree: "Bachelor's Degree in Physics",
        period: "2019 - 2022",
        description:
          "I studied for a bachelor's degree in physics, where I developed a great knowledge of logic and complex calculations, I also learned Python",
      },
      {
        institution: "CEP - Brazopolis",
        degree: "Technical Degree in Web Development",
        period: "2017 - 2018",
        description:
          "Completed a comprehensive program covering technologies such as Java, HTML, CSS, JavaScript, MySQL, PHP.",
      },
    ],
  },
  contact: {
    title: "Let's Build Together",
    description:
      "I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out.",
  },
};

export default en;
