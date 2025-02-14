import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { TbUrgent } from 'react-icons/tb';
import {Link} from 'react-scroll'


const Navbar = () => {
  const [menu, setMenu ] = useState(false)
  const [scrolled, setScrolled]=useState(false);

  const navItems=[
    {
      id:1,
      text:"Home"
    },
    
    {
      id:2,
      text:"Projects"
    },
    {
      id:3,
      text:"About"
    },
    {
      id:4,
      text:"Contact"
    }

  ]

  useEffect(()=>{

    const handleScroll = () =>{
      if(window.scrollY >100) {
        setScrolled(true);
      }else{
        setScrolled(false)
      }
    };



    window.addEventListener('scroll', handleScroll);

    return()=>{
    window.removeEventListener('scroll', handleScroll);
  };

  },[]);

  

  

  return (
    <div className= {`max-w-screen-2xl items-center container mx-auto px-4 pd:px-20 py-3   text-white fixed top-0 left-0 right-0 z-10
      transition-all duration-300 ${scrolled ? 'bg-[#160724]' : 'bg-[#e7e7e700]'}`}>
        <div className='flex sm:justify-around justify-between'>
            <div className='flex  space-x-2 '> 
                <img className='h-10 w-10 rounded-full ' src={logo} alt='log'/>
               <h1 className='font-semibold text-xl cursor-pointer flex gap-2 py-2'>Simran 
               <p className='text-semibold hidden sm:block '>| Web Developer</p>
               </h1>
               
            </div>
            <div className='hidden sm:block py-3 text-xl'>
              <ul className='flex space-x-8 '>
               {
                navItems.map(({id,text})=>(
                  <li className='hover:scale-105 duration-200 cursor-pointer' 
                  key={id}> 
                  <Link to={text}
                   smooth={true}
                   duration={500}
                   offset={-70}
                   activeClass='active'>
                  {text}
                  </Link>

                 </li>
                ))
               }
              </ul>

           
             
            </div>
            <div className='sm:hidden py-3' onClick={()=>setMenu(!menu)}>
              { menu ? <IoMdClose size={24}/>: <IoMdMenu size={24}/>}
            </div>

            
           
        </div>

      {
        menu && (
      

        <div className='sm:hidden flex flex-1 justify-end  '>
       

          <div  className=' p-2 purple-gradient px-6 text-white absolute top-18   my-2 min-w-[12px] z-10 rounded-xl'>
             <ul className='text-ba'>
              {
                navItems.map(({id,text})=>(
                  <li className='hover:scale-105 duration-200 cursor-pointer text-base' key={id}>
                    
                    <Link to={text}
                   smooth={true}
                   duration={500}
                   offset={-70}
                   activeClass='active'>
                  {text}
                  </Link>
                    </li>
                ))
               }
            </ul>
          </div>


        </div> )

        }
        


    </div>
  )
}

export default Navbar