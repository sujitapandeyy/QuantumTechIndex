import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Imgscroll from './Imgscroll'
const Intro = () => {
  return (
    
    <section className=" container mx-auto justify-center p-10  pt-10 overflow-hidden h-screen">
         <div className="">
      <h1 className="font-bold text-xl text-orange-600 pt-10">
      Our Works
      </h1>
      <h1 className="font-bold lg:text-6xl text-2xl lg:bold-99 font-serif">
      Introduction to Our projects
      </h1>
      <h1 className=" lg:text-2xl text-gray-500 text-md lg:bold-22 font-serif py-5">
      <span className="font-bold text-yellow-500 p-3 ld:text-3xl ml-40 lg:bold-99 font-serif">|</span>
      We help brands of all kind and businesses of every size grow their online revenue.      </h1>
      </div>
      <Imgscroll/>
  </section>
  )
}

export default Intro