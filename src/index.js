import {
    backend,
    mobile,
    web,
    react,
    book,
    uber
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
      icon: backend,
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
        "Your MERN Stack Uber Clone is a ride-hailing application built using MERN stack. It enables users to book rides, track drivers in real time, and manage ride history efficiently",
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
    
  ];

  


  export {services , projects}