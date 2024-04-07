'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); 
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/main5.png")',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        width: '100%',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 z-0"></div>
      <nav className="container mx-auto border-b-2 border-red p-4 relative flex items-center justify-between bg-transparent">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={75} height={20} className="animate-rotate" />
        </Link>

        {!menuOpen && (
          <div className="lg:hidden">
            <Image
              src="/menu1.png"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        )}

        <ul className={`lg:flex gap-12 font-bold ${menuOpen ? 'block' : 'hidden'}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href} onClick={closeMenu}> {/* Close menu when clicking on a navigation link */}
              <Link href={link.href}>
                <p className="text-xl text-white hover:text-yellow-400">{link.label}</p>
              </Link>
            </li>
          ))}
          {menuOpen && (
            <li>
              <button
                onClick={toggleMenu}
                className="text-xl text-white hover:text-yellow-400 focus:outline-none flex items-center"
              >
                <AiOutlineClose className="ml-6" />
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
