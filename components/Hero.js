'use client'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import React from 'react';
import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi'; 
const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <motion.div 
  
    style={{ backgroundImage: 'url("/main5.png")',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed', 
    width: '100%',
      height: '100vh', 
      backgroundSize: 'cover'}}>
    <section className=" container mx-auto  flex items-center justify-center p-10 overflow-hidden ">

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} 
      transition={{ duration: 0.5 }}
  
  
    className="">

      <div>
        <h1 className="lg:text-7xl text-4xl font-bold font-serif bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent ">
          Striving for <br/> 
         <span className="bg-gradient-to-r from-yellow-200 to-orange-700 bg-clip-text"> Progress</span> <br/> Leading Towards<br/> <span className="bg-gradient-to-r from-yellow-200 to-orange-700 bg-clip-text"> Perfection</span> 
        </h1>
      
      
      <div className="relative flex flex-cols xl:w-1/2">


<h1 className="text-xl lg:text-2xl text-yellow-400 lg:bold-22 font-sans py-5 lg:mt-10 mb-10" >
  You understand your customers better than anyone. We know that, and we can help you turn that knowledge into results.
</h1>


      </div>
      </div>

      <div className="p-5 relative">
  <Link href="/" className="group bg-blue-500 lg:w-[19.8%] md:w-[32%] sm:w-[60%] w-[80%] hover:bg-yellow-500 text-md lg:text-xl text-white font-bold p-4 rounded-full  flex items-center pl-3 space-x-2 transition duration-300 ease-in-out relative">
    <motion.span ref={ref}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} 
      transition={{ duration: 0.5 }}
  >QUICK INQUIRY</motion.span>
    <div className="absolute w-14 h-14 bg-blue-400 group-hover:bg-yellow-200 rounded-full flex items-center justify-center lg:top-[3.9%] top-[3%] lg:left-[71%] left-[67%]">
      <FiChevronsRight className="text-3xl font-bold relative z-10 group-hover:animate-rotated" />
    </div>
  </Link>
</div>


    </motion.div>




   

  </section>
  </motion.div>
  );
};

export default Hero;


