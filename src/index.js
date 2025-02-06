import {
    backend,
    mobile,
    web,
    react
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
        "Full Stack applications allows to user purchase books",
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
      image: '',
      source_code_link: "https://github.com/Simrankaur16/BookHeaven",
    },
    {
      name: "Uber Clone",
      description:
        "Uber Clone using MERN Stack",
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
      image: '',
      source_code_link: "https://github.com/Simrankaur16/UberClone",
    },
    
  ];

  


  export {services , projects}