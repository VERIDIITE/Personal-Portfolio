// PROJECTS
export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Tabb – Migration Project (Private)",
    description:
      "Led the modernization of a legacy Ruby on Rails application into a modular TypeScript-based system using Next.js, NestJS, and Prisma.",
    subDescription: [
      "Rebuilt the architecture with clear separation between frontend (Next.js) and backend (NestJS) for better scalability and maintainability.",
      "Integrated Prisma ORM with PostgreSQL to ensure type-safe queries, schema management, and seamless database connectivity.",
      "Configured Heroku pipelines for continuous deployment, version control, and efficient staging-to-production workflows.",
      "Documented the full migration process and presented technical findings to management, highlighting future-proof design and system flexibility.",
    ],
    href: "https://tabb.cc/",
    logo: "",
    image: "/assets/projects/tabb.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        name: "Nestjs",
        path: "/assets/logos/nestjs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Moonstone – Admin Module (Private)",
    description:
      "A unified admin module developed for Moonstone, designed to serve both the Lunim and Tabb platforms. Built using Next.js, NestJS, Prisma, and Prismic CMS for content management.",
    subDescription: [
      "Implemented a scalable admin module inside Moonstone to centralize management for both Lunim and Tabb.",
      "Integrated Prismic CMS for structured content management across multiple product domains.",
      "Developed reusable components and shared services to streamline operations between platforms.",
      "Used Next.js for the frontend architecture and NestJS + Prisma for secure backend APIs.",
    ],
    href: "https://github.com/VERIDIITE",
    logo: "",
    image: "/assets/projects/moonstone.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        name: "Nest.js",
        path: "/assets/logos/nestjs.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Hyperactive Block Reveal Animation",
    description:
      "A visually striking block-reveal animation system powered by GSAP, designed to create high-impact transitions and content reveals for modern web experiences.",
    subDescription: [
      "Built a dynamic block-reveal effect using GSAP’s advanced animation engine.",
      "Created smooth, high-performance transitions with precise timing and stagger controls.",
      "Implemented reusable animation utilities for easy integration across multiple pages and components.",
      "Optimized for modern Next.js front-end workflows and responsive layouts.",
    ],
    href: "https://block-reveal-animation.vercel.app/", // update if you want to point to a specific repo
    logo: "",
    image: "/assets/projects/block.png", // replace with your actual image
    tags: [
      {
        id: 1,
        name: "GSAP",
        path: "/assets/logos/gsap.png",
      },
      {
        id: 2,
        name: "Nextjs",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },

  {
    id: 5,
    title: "AI-Powered NFT Discovery Platform Project",
    description:
      "A modern, AI-driven NFT discovery and curation platform built with Next.js, React, and TypeScript to redefine digital asset exploration.",
    subDescription: [
      "Developed intelligent NFT recommendation and curation systems powered by AI algorithms for personalized discovery experiences.",
      "Built a modern Spotify-inspired interface with smooth Framer Motion animations and responsive design across all devices.",
      "Implemented playlist-style NFT management features, enabling users to create, save, and organize their favorite collections.",
      "Leveraged a modern tech stack — Next.js 14, React 18, Tailwind CSS, Shadcn/UI, and Sonner for interactive notifications — to deliver a sleek and performant user experience.",
    ],
    href: "https://curatedaiproject-jcjy.vercel.app/",
    logo: "",
    image: "/assets/projects/nft.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/logos/nextjs.png",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Directory Search Utility",
    description:
      "A fast and efficient folder search tool built with C# .NET for locating files based on custom criteria.",
    subDescription: [
      "Developed high-performance directory scanning algorithms for rapid file discovery.",
      "Implemented customizable search parameters including filename, content, size, and date filters.",
      "Created an optimized indexing system for near-instantaneous search results.",
      "Designed a clean, intuitive interface for effortless navigation and file management.",
    ],
    href: "https://github.com/VERIDIITE/WinForms-File-Searcher",
    logo: "",
    image: "/assets/projects/S2.png",
    tags: [
      {
        id: 1,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
];

// SOCIALS

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/VERIDIITE",
    icon: "/assets/logos/github.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kasam-software-engineer/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/veridiite.wav/",
    icon: "/assets/socials/instagram.svg",
  },
];

// WORK EXPERIENCE

export const experiences = [
  {
    title: "Software Engineer (Internship)",
    job: "Risidio",
    date: "2024-2025",
    contents: [
      "Contributed to the migration of legacy Ruby on Rails systems into a modern TypeScript-based architecture using Next.js and NestJS.",
      "Developed modular, scalable frontend and backend components — integrating Prisma ORM for type-safe database management with PostgreSQL.",
      "Enhanced CI/CD pipelines and deployment automation through Heroku, ensuring smooth delivery and environment consistency.",
      "Collaborated cross-functionally to document and present the new architecture (Tabb project) — improving team understanding and future scalability.",
    ],
  },
  {
    title: "Back-of-House Trainer",
    job: "Popeyes Louisiana Kitchen",
    date: "2022-2024",
    contents: [
      "Maintained rigorous food quality and safety protocols, consistently meeting or exceeding company standards.",
      "Proactively trained and mentored new team members on proper kitchen procedures and equipment operation.",
      "Implemented efficient inventory management systems, reducing waste by 15% and ensuring optimal stock levels.",
      "Contributed to positive team dynamics, resulting in improved operational efficiency and enhanced customer satisfaction.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
