'use client'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react'
import {FaLightbulb,FaPallet, FaCode, FaRocket } from 'react-icons/fa';

const Testcomponent = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
  return (

    
    <div style={{ backgroundImage: 'url("/main3.png")' }}>
    <div className="container mx-auto p-10 lg:h-screen">
      <h2 className="text-xl text-orange-500 font-bold mb-6">Steps</h2>
      <h2 className="text-5xl text-white font-bold mb-20">Take some easy steps for processing</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="lg:flex justify-between items-center relative"
      >
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 z-10 rounded-full bg-blue-500 flex justify-center items-center lg:mr-20">
            <FaLightbulb size={48} className="text-white" />
          </div>
          <p className="text-md text-white font-bold mt-2">Analysis and Investigate</p>
        </div>

        <div className="flex flex-col items-center lg:mt-60">
          <div className="w-24 h-24 rounded-full bg-blue-500 z-10 flex justify-center items-center">
            <FaPallet size={48} className="text-white" />
          </div>
          <p className="text-md text-white font-bold mt-2">Wireframe and Design</p>
        </div>

        <div className="absolute top-[50%] right-[16%] hidden md:block">
          <img src="/line.png" alt="Line" className="w-400 h-400" />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full z-10 bg-blue-500 flex justify-center items-center">
            <FaCode size={48} className="text-white" />
          </div>
          <p className="text-md text-white font-bold mt-2">Development and Integration</p>
        </div>

        <div className="flex flex-col items-center lg:mt-60 lg:mr-20 ">
          <div className="w-24 h-24 rounded-full z-10 bg-blue-500 flex justify-center items-center">
            <FaRocket size={48} className="text-white" />
          </div>
          <p className="text-md text-white font-bold mt-2">Testing and Deployment</p>
        </div>
      </motion.div>
    </div>
  </div>
  );
};




export default Testcomponent