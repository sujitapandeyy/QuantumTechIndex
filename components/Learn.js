'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Learn = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return (
    <section className="container mx-auto border-b-2 border-red p-10 h-screen">
      <h1 className="font-bold text-orange-600 lg:pt-10">WELCOME TO QUANTUMC</h1>
      <h1 className="bold-77 text-2xl lg:text-7xl lg:bold-99 font-serif">
        Learn more about our organization
      </h1>
      <div className="relative w-full h-96 flex">
        <div
          className="relative z-20 flex flex-cols xl:w-1/2"
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden md:block">

          <Image src="/learn3.png" alt="logo" width={500} height={500} className="absolute top-[100px]" />
          </div>
          <h1 className="lg:text-xl text-sm text-gray-600 ">
            Our approach is simple. We learn about the unique customer value your business creates,
            before building a custom website, to ensure everything to help you and your brand
            achieve growth.
          </h1>
          <motion.div
            className="flex xl:w-1/2 absolute lg:right-[-500px] lg:top-[70px] right-[-40px] top-[70px] mt-20 sm:mt-0 "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Image src="/mission2.png" alt="logo" width={100} height={50} />
            <h1 className="text-md lg:text-xl lg:bold-99 font-serif lg:pl-4" >
              <span className="font-bold text-2xl text-yellow-600 pt-10">Our Mission</span><br />
              To establish the company name and the expansion of company.
            </h1>
          </motion.div>
          <motion.div
            className="flex xl:w-1/2 pt-5 absolute lg:right-[-600px] lg:top-[270px] right-[-50px] top-[280px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Image src="/goal1.png" alt="logo" width={130} height={50} />
            <h1 className="text-md lg:text-xl lg:bold-99 font-serif lg:pl-4">
              <span className="font-bold text-2xl text-yellow-600 pt-10">Our Goal</span><br />
              To reach every potential customer and provide the best service.
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
