import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu ] = useState(false)

  return (
    <div className='max-w-screen-2xl items-center container mx-auto px-4 pd:px-20 py-3 shadow-md shadow-cyan-900 bg-black text-white'>
        <div className='flex sm:justify-around justify-between'>
            <div className='flex  space-x-2 '> 
                <img className='h-10 w-10 rounded-full ' src={logo} alt='log'/>
               <h1 className='font-semibold text-xl cursor-pointer flex gap-2 py-2'>Simran 
               <p className='text-semibold hidden sm:block '>| Web Developer</p>
               </h1>
               
            </div>
            <div className='hidden sm:block py-3 text-xl'>
              <ul className='flex space-x-8 '>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>

           
             
            </div>
            <div className='sm:hidden py-3' onClick={()=>setMenu(!menu)}>
              { menu ? <IoMdMenu size={24}/>: <IoMdClose size={24}/>}
            </div>

            
           
        </div>

        <div className='sm:hidden flex flex-1 justify-end  '>
       

          <div  className=' p-2 bg-[rgb(0,36,40)] px-6 text-white absolute top-18   my-2 min-w-[12px] z-10 rounded-xl'>
             <ul className='text-ba'>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>


        </div>
        


    </div>
  )
}

export default Navbar