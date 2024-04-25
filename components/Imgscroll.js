'use client'
import React, { useState, useEffect } from 'react';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'; 


const Imgscroll = () => {
  const [index, setIndex] = useState(0);

  const images = [
    { 
      url: "/main2.png", 
      title: "01", 
      subtitle: "Realdaam",
      websiteUrl: "https://www.realdaam.com" 
    },
    { 
      url: "/intro2.png", 
      title: "02", 
      subtitle: "Realdaam ",
      websiteUrl: "https://www.youtube.com"    

    },
    { 
      url: "/intro1.png", 
      title: "03", 
      subtitle: "Realdaam",
      websiteUrl: "https://www.facebook.com" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]); 

  const handlePrev = () => {
    setIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container relative">
      <img src={images[index].url} alt="img" style={{ width: '50%', height: 'auto', float: 'right' }} className="object-cover mt-10 lg:p-10 " />
      <div className="absolute flex flex-col justify-f items-left  text-white lg:pt-40 lg:p-20">
  <h2 className="lg:font-bold text-yellow-300 text-xl lg:text-7xl">{images[index].title}</h2>
  <h3 className="lg:text-4xl text-md font-bold text-black lg:p-5 ">{images[index].subtitle}</h3>
  <span>

  </span>
  <div className="group  lg:pt-0 pt-20 lg:pl-2 pl-10 relative ">
  <div className="font-bold  w-[140%] lg:w-[110%] p-5 lg:m-0 mt-20 text-white lg:text-xl text-sm bg-yellow-300 group-hover:bg-green-500  hover:font-bold rounded-full ">
  <a href={images[index].websiteUrl}  target="_blank" rel="noopener noreferrer" >View Website</a>
    <div className="absolute w-14 h-14 bg-yellow-200  group-hover:bg-green-400 rounded-full flex items-center justify-center lg:top-[7%] lg:left-[81%] top-[73%] left-[98%]">
      <FiChevronsRight className="text-3xl font-bold relative z-10 group-hover:animate-rotated" />
    </div>
</div>

  </div>
</div>
<button onClick={handlePrev} className="absolute top-[220px] left-0   text-black focus:outline-none">
        <FiChevronsLeft size={40} />
      </button>
      <button onClick={handleNext} className="absolute top-[220px]  right-0 text-black focus:outline-none">
        <FiChevronsRight size={40} />
      </button>

    </div>
  );
};

export default Imgscroll;
