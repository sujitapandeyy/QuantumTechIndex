'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const Service = () => {
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
    <div style={{ backgroundImage: 'url("/main3.png")' }}>
      <section className="container mx-auto lg:flex justify-center items-center   pt-5 pb-5">
        <div className="  ">
          <div className="lg:grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-20 gap-y-5">
            
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <div className="rounded-xl p-3 shadow-xl overflow-hidden" style={{ maxWidth: '100%', maxHeight:'100%' }}>
                <Image
                  src="/service1.png"
                  alt="Service 1"
                  layout="responsive"
                  width={300}
                  height={400}
                />
              </div>
              <button className="absolute lg:w-[32%] top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-yellow-400 text-white lg:text-md font-bold py-2 lg:px-4 rounded-full">
                <span className="flex items-center">Web development</span>
              </button>
            </motion.div>
            
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <div className="rounded-half p-3 shadow-xl overflow-hidden" style={{ maxWidth: '100%' , maxHeight:'100%'}}>
                <Image
                  src="/service3.png"
                  alt="Service 3"
                  layout="responsive"
                  width={400}
                  height={400}
                />
              </div>
              <button className="absolute w-[33%] top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 lg:px-4 rounded-full">
                <span className="flex items-center">App development</span>
              </button>
            </motion.div>
            
            {/* Services heading */}
            <div className="col-span-2 text-center mb-8 pt-6">
              <h2 className="text-3xl font-bold text-gray-800">Services We Provide</h2>
            </div>
            
            {/* Service 5 */}
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <div className="rounded p-3 shadow-xl overflow-hidden" style={{ maxWidth: '100%' , maxHeight:'100%'}}>
                <Image
                  src="/service5.png"
                  alt="Service 5"
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
              <button className="absolute w-[32%] top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 lg:px-4 rounded-full">
                <span className="flex items-center">Machine Learning</span>
              </button>
            </motion.div>
            
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center"
            >
              <div className="rounded p-3 shadow-xl overflow-hidden" style={{ maxWidth: '100%' , maxHeight:'100%'}}>
                <Image
                  src="/service7.png"
                  alt="Service 7"
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
              <button className="absolute w-[38%] top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 lg:px-4 rounded-full">
                <span className="flex items-center">Wordpress Development</span>
              </button>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
