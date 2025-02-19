import { GiPortal } from 'react-icons/gi';
import {
    backend,
    mobile,
    web,
    react,
    book,
    uber,
    port,
    graphic
} from './assets/index'




const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Angular Developer",
      icon: web,
    },
    
  ];

  const projects = [
   
    
    {
      name: "Book Heaven",
      description:
        "BookHeaven is a full-stack online bookstore built using the MEAN stack. It allows users to browse, search, and manage books seamlessly with a modern and responsive UI.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: book,
      source_code_link: "https://github.com/Simrankaur16/BookHeaven",
    },
    {
      name: "Uber Clone",
      description:
        "The MERN Stack Uber Clone is a feature-rich transportation booking application. It enables users to book trips, track drivers in real-time, and manage their trip history with ease",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: uber,
      source_code_link: "https://github.com/Simrankaur16/UberClone",
    },
    {
      name: "My Portfolio",
      description:
        "I developed a  portfolio website using React.js and Tailwind CSS to showcase my projects and skills. The website features a clean and modern UI with a responsive design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/Simrankaur16/myPortfolio",
    },
    
  ];

  


  export {services , projects}