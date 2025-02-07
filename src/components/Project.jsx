import React from 'react'
import { projects } from '../index'
import web from '../assets/web.png';
import github from '../assets/github.png'
import Tilt from 'react-parallax-tilt'


const Project = () => {

    const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {

        return (
            <Tilt
                options={{max:45, scale:1, speed: 450}}
             className='sm:w-[290px] w-[270px]  flex flex-col'>
            <div className='w-full green-pink-gradient   p-[1px] rounded-[20px]  '>
             <div className='bg-[#05181c]  rounded-[20px] p-3     '>

              <div className='relative w-full  '>
                <img src={image} alt={name} className='w-full h-44 object-cover rounded-2xl' />
                <div className='absolute inset-0 flex justify-end   '>
                  <div className='black w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
                    onClick={()=>window.open (source_code_link, "_blank")}>
                    <img src={github}  alt='github' className='w-1/2 h-1/2 object-contain bg-black rounded'/>
                  </div>
                  


                
                </div>
                <div className='mt-4'>
                <h3 className='text-blue-200 text-[20px] '>{name}</h3>
                <p className='sm:mt-3 sm:text-base text-sm'>{description}</p> 
              </div>
              </div>
              </div>
              
              
            </div>
         </Tilt>
        )

    }

    

  return (
    <>
    <div name="Projects" className="bg-black text-white bg-home   max-w-screen-2xl min-h-auto  bg-repeat container mx-auto sm:p-12 p-4 sm:px-10 mt-0  ">
    <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider sm:px-7 '>MY WORK</p>
    <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-10'>Projects</h2>

       
    <div className='sm:mt-4 mt-3 sm:px-16  text-[17px] max-w-3xl '>
    Followings projects showcase my skills and experience through real world exmaple of my work
     . Each porject is breifly described with links to code respositories
    </div>

    <div className='mt-8  ml-7 sm:px-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    
    </div>
    </>

  )
}
  

export default Project