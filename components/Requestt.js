'use client'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi'; 

const Requestt = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    
    <div className="bg-gray-100 lg:p-20 p-10 ">
    <section className=" container mx-auto  lg:flex items-center justify-center lg:p-10 overflow-hidden lg:h-1/3 ">
      <h1 className="font-bold text-2xl lg:text-4xl  font-serif pr-10 ">
            Looking for Business Opportunity?<br/><span className="lg:font-bold text-xl text-yellow-500 font-serif" >Request for a call today</span>
      </h1>
       
    <div className="p-5 relative">
      <Link href="/" className="group bg-blue-500 lg:w-[139%] md:w-[30%] w-[99%] hover:bg-yellow-500 lg:text-xl text-white font-bold pb-5 pt-4 rounded-full shadow-md flex items-center pl-3 space-x-2 transition duration-300 ease-in-out relative">
      <motion.span
        ref={ref}
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 :  20 }} 
        transition={{ duration: 0.5 }}>QUICK INQUIRY</motion.span>
        <div className="absolute w-14 h-14 bg-blue-400 group-hover:bg-yellow-200 rounded-full flex items-center justify-center lg:top-1 top-[3%] lg:left-40 left-[67%]">
          <FiChevronsRight className="text-3xl font-bold relative z-10 group-hover:animate-rotated" />
        </div>
      </Link>
     </div>

  </section>
  </div>
  );
};

export default Requestt;


