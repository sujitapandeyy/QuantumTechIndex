import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; 

const Header = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto lg:p-5 relative  flex items-center justify-between ">
        <div className="text-gray-50 flex gap-2">
          <ul classname="lg:text-xl text-sm">
            <a href="mailto:sales@quantumc.tech">sales@quantumc.tech</a>
          </ul>
        </div>
        <div className="text-gray-50 gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2"><span className="sm:inline">Follow Us:</span>
            <div className="flex sm:flex-row sm:items-center gap-2">
              <a href="https://www.facebook.com/quantumc.tech/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl text-orange-400" />
              </a>
              <a href="https://www.instagram.com/quantumc.tech/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl text-orange-400" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-orange-400" />
              </a>
            </div>
         </div>
       </div>
  
      </div>
    </div>
  )
}

export default Header

