'use client'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import Requestt from '@/components/Requestt';

const pages = () => {

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.4,
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
            <h1 className="text-xl font-bold text-yellow-500  font-sans p-5"> What we do</h1>
            <h1 className="font-bold text-4xl lg:text-7xl lg:bold-99 font-serif bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent ">Our Driving Services</h1>
          </div>
        </div>
      </div>
    </section>
  </div> 


  <section className=" container mx-auto border-b-2 border-red  items-center justify-center p-10 overflow-hidden ">
  <motion.div 
    ref={ref1}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }}
    transition={{ duration: 0.5 }}
    className="relative flex justify-center items-center">
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
        <div className="w-4/5 md:w-1/3 lg:w-4/4 relative">
          <Image src="/service1.png"alt="Service 2" width={400}height={400} className="rounded-xl shadow-xl"/>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="lg:text-2xl text-xl font-bold text-yellow-600  pt-10">Web Development</h1>
          <p className="lg:text-md text-sm text-gray-500 pt-2">We mainly deal with building and designing websites, which includes coding and writing markup ranging from creating plain text pages to complex web-based applications, social network applications, and electronic business applications.</p>
        </div>

      </div>
  </motion.div><br/>

    <motion.div 
    ref={ref2}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
    transition={{ duration: 0.5 }}
    className="relative flex justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="lg:text-2xl text-xl font-bold text-yellow-600 pt-10">Application Development</h1>
          <p className="lg:text-md text-sm text-gray-500 pt-2">We create a mobile application or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency               </p></div>
        <div className="w-4/5 md:w-1/3 lg:w-4/4 relative">
          <Image src="/service3.png"alt="Service 2" width={400}height={400} className="rounded-xl shadow-xl"/>
        </div>

      </div>
    </motion.div>
        
    <motion.div
    ref={ref3}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
    transition={{ duration: 0.5 }}
    className="relative flex justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
        <div className="w-4/5 md:w-1/3 lg:w-4/4 relative">
          <Image src="/service5.png"alt="Service 5" width={400}height={400} className="rounded-xl shadow-xl"/>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="lg:text-2xl text-xl font-bold text-yellow-600 pt-10">Machine Development</h1>
          <p className="lg:text-md text-sm text-gray-500 pt-2">We deal with an application of AI that includes algorithms that parse data, learn from that data, and then apply what they’ve learned to make informed decisions as well as to manage data and information               </p>
        </div>
      </div>
    </motion.div>

    <motion.div 
    ref={ref4}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 20 }}
    transition={{ duration: 0.5 }}
    className="relative flex justify-center items-center">
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="lg:text-2xl text-xl font-bold text-yellow-600 pt-10">WordPress Development</h1>
        <p className="lg:text-md text-sm text-gray-500 pt-2">We deal with developing and publishing software that can be installed locally on a web server and viewed on a proprietary web site or hosted in the cloud and viewed on the WordPress web site               </p>
      </div>
      <div className="w-4/5 md:w-1/3 lg:w-4/4 relative">
        <Image src="/service7.png"alt="Service 2" width={400}height={400} className="rounded-xl shadow-xl"/>
      </div>

    </div>
    </motion.div>
          
  </section>
  <Requestt/>
      
  </>)
}

export default pages