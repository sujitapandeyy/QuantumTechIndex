'use client'
import React from 'react'
import Requestt from '@/components/Requestt'
import Image from 'next/image'
import Team from '@/components/Team'
const index = () => {
  return (
     <>
     <div style={{ backgroundImage: 'url("/main5.png")',backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed', 
      width: '100%',
      backgroundSize: 'cover' }}>
      <section className=" container mx-auto  flex items-center justify-center p-10 overflow-hidden ">
        <div className="">
          <div className="relative flex flex-cols ">
            <div>
              <h1 className="text-xl font-bold text-yellow-500  font-sans p-5">Who we are</h1>
              <h1 className="lg:text-7xl text-4xl  lg:font-bold font-serif bg-gradient-to-r  from-white to-blue-500 bg-clip-text text-transparent ">Quantum Compilers<span> Technologies</span> </h1>
            </div>
          </div>
        </div>
      </section>
     </div> 

      <div className=" bg-green-50">
        <section className=" container mx-auto  items-center justify-center p-10 overflow-hidden ">
          <h1 className="text-2xl font-bold text-yellow-500  font-sans p-5">WE ARE</h1>
          <h1 className="lg:text-6xl text-4xl font-bold text-blue-800  font-sans p-1">Young, Vibrant and Passionate</h1>
          <h1 className="text-xl text-gray-600  font-sans p-5"> We blend our skills for web development into a powerful, agile team. Our team of designers and project managers partner with you to build forward-thinking user experiences     </h1>
          <Team/>
        </section>
      </div>

    <section className=" container mx-auto  items-center justify-center p-10 overflow-hidden flex gap-5">
      <div className=" lg:flex">
        <h1 className="text-2xl font-bold text-yellow-500  font-sans p-5">COMPANY OVERVIEW</h1>
        <div className="relative z-20 flex flex-cols xl:w-1/2 absolute right-[-00px]">
          <Image src="/mission2.png" alt="logo" width={100} height={50}  />
          <h1 className=" text-xl lg:bold-99 font-serif lg:pl-4 "><span className="font-bold text-2xl text-yellow-600 pt-10">Our Mission</span><br/>To establish the company name and the expansion of company.</h1>
        </div><br/>
        <div className="relative z-20 flex flex-cols xl:w-1/2 pt-5  absolute right-[-00px] ">
          <Image src="/goal1.png" alt="logo" width={130} height={50} />
            <h1 className=" text-xl lg:bold-99 font-serif lg:pl-4"><span className="font-bold text-2xl text-yellow-600 pt-10">Our Goal </span><br/>To reach to every potential customer and provide the best service.</h1>
        </div>
      </div>
    </section>
       <Requestt/>
       </>
    
  )
}

export default index