import React from 'react'
import Tilt from 'react-parallax-tilt'
import  { services } from '../index.js'
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import react from '../assets/react.svg'


const About = () => {

    const ServiceCard = ({index, title, icon}) => {

        return(
         <Tilt className='sm:w-[250px] w-[176px]  flex flex-col'>
            <div className='w-full green-pink-gradient   p-[1px] rounded-[20px]  '>
             <div className='bg-[#05181c]  rounded-[20px] py-4 px-12 min-h-[210px]  h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
              </div>
            </div>
         </Tilt>
        )

    }
  return (
    <>
    <div name="About" className="bg-black text-white bg-home max-w-screen-2xl h-screen container mx-auto sm:p-12 p-4 md:px-10 mt-0  ">
    <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider sm:px-7'>Introduction</p>
    <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-10'>Overview.</h2>

    <div className='mt-4 sm:px-16  text-[17px] max-w-3xl '>
     Followings projects showcase my skills and experience through real world exmaple of my work
     . Each porject is breifly described with links to code respositories
    </div>
    <div className='sm:mt-20 mt-10 sm:px-20 flex flex-wrap gap-7'>
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