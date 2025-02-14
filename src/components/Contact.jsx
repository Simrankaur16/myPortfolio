import emailjs from '@emailjs/browser';
import React from 'react'
import { useState } from 'react'
import laptop from '../assets/laptop.png'
import web from '../assets/web.png';
import lap from '../assets/lap.png'


const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message:''
    });
    //HiV6dWyPD2XdyNFY1
    // template_cqxa6pn
    //service_mlaaivd

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setForm({...form,[name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_mlaaivd', 
                  'template_cqxa6pn', 
                  {
                    from_name:form.name,
                    to_name: 'Simran',
                    from_email: form.email,
                    to_email: 'simrakaur16@gmail.com',
                    message:form.message

                  },
                  'HiV6dWyPD2XdyNFY1'
                  
          ).then(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: '',
                email: '',
                message: '',
            })
          }, (error)=>{
            setLoading(false);
            console.log(error);
            alert('Someting went wrong. ')
          })


        }
   
  return (
    <>
    <div name="Contact" className="bg-[#120425]  text-white  max-w-screen-2xl min-h-auto  container mx-auto sm:p-12 p-4 md:px-10 mt-0  ">
    <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider sm:px-7'>Get in touch</p>
    <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-10'>Contact.</h2>

    <div className='flex md:flex-row  flex-col relative '>
      <div className=' md:w-1/2 relative green-pink-gradient m-3 md:m-10 rounded-2xl'>
    <div className= 'bg-[#150634]    m-[1px] rounded-2xl p-3 '>
    <form  onSubmit={handleSubmit} className='sm:mt-12 mt-5 flex flex-col gap-3 md:gap-7'>

        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
             type='text'
             name='name'
             required
             value={form.name}
             onChange={handleChange}
             placeholder="What's your name?"
             className='bg-[#110623] py-4 px-3 placeholder:text-secondary text-white rounded-lg outline-none 
                  border-none font-mediu' 
            /> 

        </label>
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
             type='email'
             name='email'
             required
             value={form.email}
             onChange={handleChange}
             placeholder="your email?"
             className='bg-[#110623] py-4 px-3 placeholder:text-secondary text-white rounded-lg outline-none 
                  border-none font-mediu' 
            /> 

        </label>
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
             rows="5"
             name='message'
             required
             value={form.message}
             onChange={handleChange}
             placeholder="What do you want to say? "
             className='bg-[#110623] py-4 px-3 placeholder:text-secondary text-white rounded-lg outline-none 
                  border-none font-mediu' 
            /> 

        </label>


        <button  type='submit' className='bg-[#110623] py-3 px-8 outline-none w-fit text-white
        font-bold shadow-md shadow-primary rounded-xl hover:bg-[#110d17] '>
             
            Send
        </button>

    </form>
    
    </div>
    </div>
    <div className='md:w-1/2 mt '>
    <img src={lap} className='md:w-700px md:h-700px' alt='laptop'/>
    </div>

    </div>
    
    </div>
    </>
  )
}

export default Contact