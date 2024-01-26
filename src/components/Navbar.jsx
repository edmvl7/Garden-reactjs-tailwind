import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const links = [
    {
      id: 1,
      title: 'Accueil',
      url: '#home',
    },
    {
      id: 2,
      title: 'Services',
      url: '#services',
    },
    {
      id: 3,
      title: 'Notre travail',
      url: '#work',
    },
    {
      id: 4,
      title: 'Avis',
      url: '#testimonials',
    },
  ];

  return (
    <nav className="w-full bg-green-50">
      <div className="justify-between mx-auto lg:max-x-7xl md:items-center md:flex md:px-12 lg:px-20">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h1 className="ps-4 md:ps-0 text-2xl text-black font-semibold cursor-pointer">
                <span className="text-green-700">G</span>
                <span className="text-orange-400">Jarden</span>
              </h1>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 text-2xl rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoMdClose width={30} height={30} className="text-green-700" />
                ) : (
                  <div className=" bg-green-50 p-2 rounded-lg hover:p-2 ">
                    <CiMenuFries
                      width={30}
                      height={30}
                      className="hover:font-bold text-xl text-green-600 w-6 h-6 hover:scale-110 cursor-pointer"
                    />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 w-100 bg-[#afafaf] md:bg-green-100  md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className="h-screen md:h-auto w-60 md:w-full items-center p-4 md:p-0 justify-center md:flex md:bg-green-50 bg-green-100">
            {links.map((link) => (
              <li
                className="pb-4 text-xl md:text-base text-[#464343] py-6 md:px-6 relative after:bg-green-300 after:absolute after:h-1 after:w-0 after:bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                key={link.id}
              >
                 <Link to={link.url} smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={() => setNavbar(!navbar)}>
                  {link.title}
                 </Link>
              </li>
            ))}
            <button className="border-2 text-center w-full rounded-lg mt-6 bg-[#16a34a] font-semibold text-white py-3 px-4 block md:hidden hover:bg-[#46b770]">
              Contactez-nous
            </button>
          </ul>
        </div>
        <button className="border-none rounded-lg bg-[#16a34a] font-semibold  text-white py-3 px-4 hidden md:block hover:bg-[#46b770]">
          Contactez-nous
        </button>
      </div>
    </nav>
  );
};
