'use client'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image'
import { FiChevronsRight } from 'react-icons/fi'; 
import Link from 'next/link';
const pages = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });
  return (
    <>
<div style={{ backgroundImage: 'url("/main5.png")',backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed', 
    width: '100%',
    backgroundSize: 'cover' }}>  
    <section className=" container mx-auto border-b-2 border-red flex p-10 overflow-hidden ">
    <div className="">
      <div className="relative flex flex-cols">
        <div>
          <h1 className="text-xl font-bold text-yellow-500  font-sans p-5">COLLECTIONS</h1>
         <h1 className="text-4xl lg:text-7xl lg:font-bold font-serif bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent ">Our Portfolio</h1>
        </div>
      </div>
    </div>
    </section>
  </div> 
  <section className=" container mx-auto border-b-2 border-red flex items-center justify-center p-20 ">
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 10 }} 
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} 
    transition={{ duration: 0.5 }}
    className="relative  justify-center items-center">
    <div className="relative lg:flex">
      <Image src="/service3.png" alt="Service 1" width={400} height={400} className="rounded-xl shadow-xl"/>
      <Link href="https://www.realdaam.com/" target="_blank" rel="noopener noreferrer"
      className="absolute w-[15%]  absolute right-[850px] top-[230px] bg-blue-500 hover:bg-blue-700 text-white  font-bold py-4 px-5 rounded-full">
        <span className="lg:flex items-center">View Website <FiChevronsRight className="text-sm ml-1" /></span>
      </Link>
      <h1 className=" lg:text-xl text-sm lg:bold-99 font-serif lg:pl-10 ">    
      <Image src="/portfolio1.png" alt="Service 1" width={400} height={400} className="lg:mt-0 mt-5"/><br/>
        Realdaam is an e-commerce website that allows you to buy and sell tangible goods, digital products or services online. It is a shop for anything right from a living room, with just a few clicks</h1>
    </div>
  </motion.div>
</section>

  </>  )
}

export default pages