'use client'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image'
const Trusted = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div className="bg-gray-300 lg:p-20 p-10">
      <section className="container mx-auto flex flex-col items-center justify-center lg:p-10 overflow-hidden lg:h-1/3">
        <motion.span 
        ref={ref}
        initial={{ opacity: 0, x: -10 }} 
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : - 20 }} 
        transition={{ duration: 0.5 }}
        className="font-bold lg:text-5xl text-xl text-blue-700 font-serif mb-2 ">Trusted By</motion.span>

        <motion.div 
        ref={ref}
        initial={{ opacity: 0, x: 30 }} 
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 :  20 }} 
        transition={{ duration: 0.5 }}
        >
          <Image src="/portfolio1.png" alt="Service 1" width={500} height={400} className="lg:pl-20 lg:p-10 p-2"/>
        </motion.div>

      </section>
    </div>
  )
}

export default Trusted
