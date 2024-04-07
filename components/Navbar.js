'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if menu is open and if the clicked element is not within the menu
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    // Function to toggle body scroll based on menuOpen state
    const toggleBodyScroll = () => {
      document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    };

    // Call the function initially and on menuOpen state change
    toggleBodyScroll();

    // Cleanup function to revert body overflow on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    // Close the menu when a link inside the menu is clicked
    setMenuOpen(false);
  };

  return (
    <div>
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
        <nav className="container mx-auto border-b-2 border-red p-4 relative flex items-center justify-between bg-transparent">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={75} height={20} className="animate-rotate" />
          </Link>

          {/* Navigation Links for larger screens (desktops) */}
          <ul className="hidden lg:flex gap-12 font-bold items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <p className="text-xl text-white hover:text-yellow-400">{link.label}</p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu Icon (visible on small screens) */}
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
        </nav>
      </div>

      {/* Vertical Menu (visible on small screens when menu is toggled) */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed top-0 right-0 bg-white w-1/2 shadow-lg p-5 z-20 h-full overflow-y-auto"
        >
          <ul className="font-bold">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="py-4" onClick={handleLinkClick}>
                <Link href={link.href}>
                  <p className="text-xl text-black hover:text-yellow-400">{link.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
