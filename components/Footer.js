import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; 
const Footer = () => {
  return (
    <>
    <footer className="flexCenter  bg-gray-600">
      <div className="container mx-auto  p-20 flex flex-col md:flex-row w-full gap-20 cursor-pointer">
        <div className=" md:w-[33%] mb-8">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={75} height={20} className="animate-rotate" />
          </Link>
          <h1 className="text-xl font-serif py-5 text-gray-300">We blend our skills for web development into a powerful, agile team. Our team of designers and project managers partner with you to build forward-thinking user experiences                </h1>
          <div className="lg:flex lg:flex-row lg:gap-5 items-center">
            <h1 className="font-bold">Follow Us:</h1>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/quantumc.tech/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl text-orange-400" /></a>
              <a href="https://www.instagram.com/quantumc.tech/" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-xl text-orange-400" /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl text-orange-400" /></a>
            </div>
          </div>

        </div>

        <div className="lg:flex flex-col gap-15">
          <div className="lg:flex lg:flex-row lg:gap-20">
            <div className="lg:w-1/4">
              <h1 className="text-2xl font-bold font-serif py-3">Company</h1>
              <ul className="font-bold list-disc pl-7">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="text-md text-gray-300 hover:text-yellow-500 py-1">
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-[60%]">
              <h1 className="text-2xl font-bold font-serif py-3">Services</h1>
              <ul className="font-bold text-md text-gray-300 py-1 list-disc pl-2">
                <li className="hover:text-yellow-500 mb-2">Web Development</li>
                <li className="hover:text-yellow-500 mb-2">App Development</li>
                <li className="hover:text-yellow-500 mb-2">Machine Learning</li>
                <li className="hover:text-yellow-500 mb-2">Wordpress development</li>
                <li className="hover:text-yellow-500 mb-2">UI/UX Design</li>
              </ul>
            </div>


            <div className="lg:w-1/2">
              <h1 className="text-2xl font-bold font-serif py-3">Get In Touch</h1>
              <div className="flex items-center">
                  
                  <Image src="/mail.png" alt="Mail icon" width={25} height={20} className="flex items-center mr-2" />
                <div>
                  <h1 className="font-bold text-md text-gray-300 py-1 hover:text-yellow-500">Mail Us</h1>
                  <a href="mailto:sales@quantumc.tech" className="f-link font-bold text-md text-gray-300 py-1 hover:text-yellow-500">sales@quantumc.tech</a>
                </div>
             </div>
              <div className="flex items-center mt-4">
              <Image src="/location.png" alt="Location icon" width={25} height={20} className="flex items-center mt-4 mr-2"/>
               <div>
                <h1 className="font-bold text-md text-gray-300 py-1 hover:text-yellow-500 ">Visit Us<br/>Kathmandu, Nepal</h1>
               </div>
             </div>
            </div>
          </div>

        </div>
      </div>
    </footer>

    <div className="bg-gray-800 text-gray-50 text-center p-6">
       Copyright©2020.QuantumCompilersTechnology. All rights reserved
    </div>
  </>
  );
};

export default Footer;
