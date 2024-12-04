import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  aws,
  python,
  nextjs,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  JobbyApp,
  NxtTrendz,
  NxtWatch,
  typescript,
  CryptoPlace,
  NikeApp,
  IphoneApp,
  Metaverse,
  StoreIt
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Frontend Developer",
    icon: web
  },
  {
    title: "MERN Stack Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "UI/UX Designer",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "AWS",
    icon: aws
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Samson proved me wrong.",
    name: "Akshaya",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Samson does.",
    name: "Murugan",
    designation: "COO",
    company: "Sri Sai Tech",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "After Samson optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kevin",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "Nxt Watch",
    description:
      "NxtWatch is a React-based web application that replicates YouTube, enabling users to explore and watch videos with an intuitive interface. It enhances community engagement through features like commenting and liking across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "NodeJS",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: NxtWatch,
    source_code_link: "https://samsonnxtwatch.ccbp.tech/"
  },
  {
    name: "Crypto Place",
    description:
      "Created a cryptocurrency tracking webpage using Node.js that fetches live market rates every 10 seconds via an API. This project offers real-time data in a user-friendly format, showcasing my web development and API integration skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "NodeJS",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: CryptoPlace,
    source_code_link: "https://crypto-place-neon.vercel.app/"
  },
  {
    name: "Nike Shoe App",
    description:
      "Created an interactive Nike shoe app with a clean, professional UI using Tailwind CSS. The application emphasizes responsive design and user engagement, showcasing my frontend development and design skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: NikeApp,
    source_code_link: "https://nike-app-delta-two.vercel.app/"
  },
  {
    name: "iPhone Website",
    description:
      "Developed a 3D iPhone website with a stunning UI, interactive modals, and a 360-degree view of a 3D iPhone model using GSAP and Three.js. This project showcases my skills in creating immersive user experiences with advanced web technologies.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient"
      },
      {
        name: "Gsap",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: IphoneApp,
    source_code_link: "https://i-phone-website-rose.vercel.app/"
  },
  {
    name: "MetaVerse Website",
    description:
      "Developed a futuristic metaverse website that features fully animated elements and responsive design, utilizing React and Tailwind CSS. ​The project focuses on delivering an engaging and immersive user experience through dynamic visuals and smooth interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: Metaverse,
    source_code_link: "https://samsonnxtwatch.ccbp.tech/"
  },
  {
    name: "Jobby App",
    description:
      "JobbyApp is a web application built with React, Node.js, and REST APIs, designed to streamline the job search process for users. It features an intuitive interface that allows individuals to explore job listings and connect with potential employers efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "nodeJS",
        color: "pink-text-gradient"
      }
    ],
    image: JobbyApp,
    source_code_link: "https://jobsfinderr.ccbp.tech/"
  },
  {
    name: "NxtTrendz",
    description:
      "NxtTrendz is an e-commerce shopping app that offers users a seamless online shopping experience. With an intuitive interface, it allows customers to browse and purchase a diverse range of products effortlessly And can be a perfect Fintech project",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: NxtTrendz,
    source_code_link: "https://samsonxtrendzz.ccbp.tech/"
  },
   {
    name: "StoreIt",
    description:
      "​Developed StoreIt, a full-stack Google Drive clone that allows users to store and manage files efficiently.​ Using Next.js for the frontend and Appwrite for the backend database, the application delivers a seamless and responsive user experience. This project highlights my skills in full-stack development and integration of modern technologies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "AppWrite",
        color: "pink-text-gradient"
      },
      {
        name: "tailwind",
        color: "blue-text-gradient"
      }
    ],
    image: StoreIt,
    source_code_link: "https://storage-management-solution.vercel.app/"
  }
];

export { services, technologies, experiences, testimonials, projects };
