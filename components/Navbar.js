'use client'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about-us', key:' About us', label: ' About us' },
    { href: '/services', key:'Services', label: 'Services' },
    { href: '/portfolio', key:'Portfolio', label: 'Portfolio' },
    { href: '/contact-us', key:'Contact', label: 'Contact' },
  ];

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

          {/* large screen */}
          <ul className="hidden lg:flex gap-12 font-bold items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                <p className="text-xl text-white  hover:text-yellow-400">

                    {link.label}
                </p>

                </Link>
              </li>
            ))}
          </ul>

          {/* small screen */}
          <div className="lg:hidden">
            <Image
              src="/menu1.png"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer"
            />
          </div>
        </nav>
      </div>

      {/* Vertical Menu (visible on small screens when menu is toggled) */}
        <div className="lg:hidden fixed top-0 right-0 bg-white w-1/2 shadow-lg p-5 z-20 h-full ">
          <ul className="font-bold">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="py-4">
                <Link href={link.href}>
                  <p className="text-xl text-black ">
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
