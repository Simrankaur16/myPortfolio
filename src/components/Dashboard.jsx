import React from 'react'
import banner from '../assets/computer.png'
import { ReactTyped } from 'react-typed'



const Dashboard = () => {
  return (
    <>
    {/* <div className='max-w-screen-2xl h-screen  container mx-auto p-4 md:px-20 mt-18   bg-black ' >
       <div className='flex flex-col md:flex-row'>
        <div classname="sm:w-1/2">
          <div className='w-5 h-5 rounded-full bg-[#418386]'/>
          <div className='w-1 sm:h-80 h-40 green-gradient '/>
        </div>
        <div classname="sm:w-1/2">Right</div>
       </div>
    </div> */}

       <section name="Home" className="max-w-screen-2xl h-screen  container mx-auto p-4 md:px-20 mt-0 text-white   bg-home">
        <div className="sm:px-13 px-6 absolute inset-0 top-[100px] sm:top-[150px] max-w-7xl mx-auto flex
        flex-row items-start gap-5">

          <div className='flex flex-col justify-center
           items-center mt-7 sm:mt-20'>
            <div className='w-5 h-5 rounded-full bg-[#84e1e0]'/>
            <div className='w-1 sm:h-80 h-55 green-gradient'/>
            
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='sm:mt-20 mt-7'>
              <h1 className='font-black lg:text-[70px] sm:text-[60px]   text-[34px] lg:leading-[98px] mt-2'>
                Hello, I'm Simran 
                
              </h1>
              <span className='text-4xl text-[#84e1e0]'> 
                < ReactTyped
                   
                   strings={["Developer", "Programmer", "Coder"]}
                   typeSpeed={80}
                   backSpeed={70}
                   loop={true}
                   />
              </span>
              <p className='text-[#d9fdff]  text-2xl lg:text-[30px] sm:text-[26px]  lg:leading-[40px] mt-10 sm:mt-12  text-white-100'>
               I develop web applications and intuitive user interfaces
               </p>
             
              
            </div>

            <div className='md:w-1/2 mt-10 h-90   '>
             <img src={banner} className='md:w-500px md:h-400px' alt='banner'/>
            </div>
          </div>



            

          </div>

        
    </section>

    </>
  )
}

export default Dashboard