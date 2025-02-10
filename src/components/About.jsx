import React from 'react'
import Tilt from 'react-parallax-tilt'
import  { services } from '../index.js'
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import react from '../assets/react.svg'


const About = () => {

    const ServiceCard = ({index, title, icon}) => {

        return(
         <Tilt  options={{max:45, scale:1, speed: 450}}
          className='sm:w-[250px] w-[140px]   flex flex-col'>
            <div className='w-full green-pink-gradient   p-[1px] rounded-[20px]  '>
             <div className='bg-[#1f0732]  rounded-[20px] py-4 px-12 h-[200px]  sm:h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title} className='w-16 h-16 object-cover' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
              </div>
            </div>
         </Tilt>
        )

    }
    
  return (
    <>
    <div name="About" className="bg-[#13061f]  text-white  max-w-screen-2xl min-h-auto  container mx-auto sm:p-12 p-4 md:px-10 mt-0  ">
    <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider sm:px-7'>Introduction</p>
    <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-10'>Overview.</h2>

    <div className='mt-4 sm:px-16 sm:text-[20px]    text-[17px] max-w-3xl '>
    I'm a skilled software developer with experience in Typescript and Javascript, and expertise in framworks
     like React, Angular and Node.js. I'm a quick learner and collaborate closely 
     with clients to create efficent, scalable and use friendly solutions to solve real-world problems. Let's work 
     Together to bring your ideas to life!
     
    </div>
    <div className='sm:mt-20 mt-5 sm:px-20 flex flex-wrap gap-7 items-center justify-center'>
        {
            services.map((service ,index)=>(
                <ServiceCard key={service.title} index={index} {...service}/>
            ))
        }

    </div>
    </div>
    </>

   
  )
}

export default About