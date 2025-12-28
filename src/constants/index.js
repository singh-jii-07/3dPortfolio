import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  reactnative,
  book
} from "../assets";
import express from "../assets/Express.png";
import Bootstrap from "../assets/Bootstrap.png";
import Civilissue from "../assets/Civilissue.png";
import socialmedia from '../assets/socialmedia.png'
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },

  {
    name: "Express JS",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "react native",
    icon: reactnative,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "CodeAlpha",
    icon: freelance,
    iconBg: "#0188E3",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP.",
      "Developed and deployed modern landing pages and portfolio websites for clients.",
      "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
      "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company_name: "NKPR & Promotion",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "July 2025 - Oct 2025",
    points: [
      "Developed and maintained the company’s website using React.js and modern CSS.",
      "Improved overall performance, responsiveness, and UI/UX across all devices.",
      "Worked with tools like Node.js, Express.js, MongoDB, React.js, and Git.",
      "Gained hands-on experience in deploying apps and following clean code practices.",
      "Implemented new features, design updates, and interactive components.",
      "Collaborated with the team to enhance layout consistency and ensure smooth user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SamadhanSetu",
    description:
      "A MERN-based platform where citizens report geotagged civic issues with images, and authorities track, assign, and resolve them through a map-driven admin dashboard with status updates and analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node JS",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Civilissue,
    source_code_link: "https://github.com/chandandubey411/cgc-hacathon.git",
    live_website_link: "https://macbookpro3d.netlify.app/",
  },
  {
    name: "BaatCheet",
    description:
      " A real-time MERN-based social media app that lets users connect, share posts, and interact through likes, comments, and live conversations in a secure and responsive environment..",
    tags: [
      {
        name: "RealTimeApp",
        color: "blue-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "https://github.com/singh-jii-07/Social_Media.git",
    live_website_link: "https://falverra-recode.netlify.app/",
  },
  {
    name: "Book Bazar",
    description:
      "Book Bazar is a MERN-based e-commerce platform for buying and selling books online. Users can browse books, view details, add items to cart, and place orders through a secure and user-friendly interface.",
    tags: [
      {
        name: "OnlineStore",
        color: "blue-text-gradient",
      },
      {
        name: "MERNStack",
        color: "green-text-gradient",
      },
      {
        name: "ShoppingCart",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/singh-jii-07/Book-Selling-App.git",
    live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
