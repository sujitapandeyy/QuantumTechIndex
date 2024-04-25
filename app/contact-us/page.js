'use client'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react'
const page = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
   <div style={{ backgroundImage: 'url("/main5.png")',backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed', 
      width: '100%',
      backgroundSize: 'cover' }}>
      <section className=" container mx-auto border-b-2 border-red flex  p-10 overflow-hidden ">
        <div className="">
          <div className="relative flex flex-cols">
            <div>
              <h1 className="text-xl font-bold text-yellow-500  font-sans p-5">CONTACT US</h1>
              <h1 className="text-4xl lg:text-7xl lg:font-bold font-serif bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent ">Send Your Message</h1>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section className=" container mx-auto border-b-2 border-red lg:flex items-center justify-center p-10 overflow-hidden ">
      <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -10 }} 
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : - 20 }} 
      transition={{ duration: 0.5 }}
      class="lg:w-1/2">
      <h1 class="text-3xl text-gray-800 font-bold pb-4">CONTACT US</h1>
        <p class="text-sm text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sequi ipsum voluptatibus consectetur, dicta et nulla quos dignissimos. Quo fuga facilis autem official</p>
        <div class="flex items-center mb-4">
          <img src="/mail.png" alt="Mail icon" width="25" height="20" class="mr-3" />
          <div>
            <h2 class="text-lg font-bold text-gray-800">Mail Us</h2>
            <a href="mailto:sales@quantumc.tech" class="text-yellow-500 font-bold hover:text-yellow-600">sales@quantumc.tech</a>
          </div>
        </div>
    
        <div class="flex items-center">
          <img src="/location.png" alt="Location icon" width="25" height="20" class="mr-3" />
          <div>
              <h2 class="text-lg font-bold text-gray-800">Visit Us</h2>
              <p class="text-yellow-500 font-bold hover:text-yellow-600">Kathmandu, Nepal</p>
          </div>
        </div>
      </motion.div>

      <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 10 }} 
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 :  20 }} 
      transition={{ duration: 0.5 }}
      class='container mx-auto'>
          <form id="myform" class='grid grid-cols-1 gap-4 p-6 mt-2 bg-white rounded-lg max-w-md mx-auto  shadow-md'>
          <h2 class="text-md font-bold text-gray-800 justify-center flex mt-6 p-6">Write your message here</h2>
              <input type="text" name="name" placeholder="Your Name" required class="border rounded py-2 px-4 "/>
              <input type="email" name="email" placeholder="Your Email" required class="border rounded py-2 px-4 "/>
              <textarea name="project" cols="10" rows="2" placeholder="Project Description" required class="border rounded py-2 px-4"></textarea>
              <button class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full " type="submit" name="submit">Submit</button>
          </form>
      </motion.div>


    </section>


    <section className="container mx-auto py-12">
    <motion.div
    ref={ref1}
    initial={{ opacity: 0, y: 10 }} 
    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 :  20 }} 
    transition={{ duration: 0.5 }}>
      <h2 className="lg:text-3xl text-2xl font-bold text-gray-800 mb-8 text-center">What will be your next step?</h2>
      <div className="grid grid-cols-1 p-10 md:grid-cols-3 gap-8">
        <div className="bg-blue-100 border border-blue-200 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-800 "><span> 01  </span>  We'll prepare a proposal</h3>
          <p className="text-sm text-gray-600">Required scope, timeline and approximate price will be included if you provide us with a detail information about your project.</p>
        </div>
        <div className="bg-green-100 border border-green-200 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-green-800"><span>02  </span>Together we discuss it</h3>
          <p className="text-sm text-gray-600">Let’s get acquainted and discuss all the possible alternatives, variants and options. through the help of social platforms.</p>
        </div>
        <div className="bg-yellow-100 border border-yellow-200 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-yellow-800"><span>03  </span>Let’s start building</h3>
          <p className="text-sm text-gray-600">When the contract is signed and all the goals are set, we can start the first sprint and wait for further output.</p>
        </div>
      </div>
      </motion.div>
    </section>
      
  </>  
  )
}

export default page