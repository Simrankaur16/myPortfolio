import React from 'react'
import { projects } from '../index'
import web from '../assets/web.png';
import Tilt from 'react-parallax-tilt'


const Project = () => {

    const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {

        return (
            <Tilt className='sm:w-[250px] w-[176px]  flex flex-col'>
            <div className='w-full green-pink-gradient   p-[1px] rounded-[20px]  '>
             <div className='bg-[#05181c]  rounded-[20px] py-4 px-2 min-h-[210px]  h-[280px] flex justify-evenly items-center flex-col'>
                <img src={web} alt={name} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
       
                
              </div>
              
            </div>
         </Tilt>
        )

    }

    

  return (
    <>
    <div name="Projects" className="bg-black text-white bg-home max-w-screen-2xl h-screen container mx-auto sm:p-12 p-4 md:px-10 mt-0  ">
    <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider sm:px-7'>MY WORK</p>
    <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-10'>Projects</h2>

    <div className='mt-4 sm:px-16  text-[17px] max-w-3xl '>
     I'm a skilled software developer with experience in Typescript and Javascript, and expertise in framworks
     like React, Angular and Node.js. I'm a quick learner and collaborate closely 
     with clients to create efficent, scalable and use friendly solutions to solve real-world problems. Let's work 
     Together to bring your ideas to life!
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    
    </div>
    </>

  )
}
  

export default Project