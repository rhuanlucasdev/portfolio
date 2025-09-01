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
            "Initially developed the EMBRAZA landing page using React, Next.js, TypeScript, and TailwindCSS, delivering a responsive, high-performance site that strengthened the brand’s online presence. With the project’s expansion, I am now contributing to the development of a full e-commerce platform, aiming to enhance user experience, increase engagement, and drive online sales while maintaining a scalable and maintainable codebase.",
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
          title: "SurvivalPlus",
          description:
            "Contributed to the SurvivalPlus mod in Java, developing simple interfaces and exploring new technologies beyond frontend.",
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
