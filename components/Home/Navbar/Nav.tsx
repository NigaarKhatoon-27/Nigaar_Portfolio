// "use client"; 

// import React from 'react'
// import { FaCode } from 'react-icons/fa'
// import { NavLinks } from '@/constant/constant'
// import Link from 'next/link'
// import { BiDownload } from 'react-icons/bi'
// import { HiBars3BottomRight } from 'react-icons/hi2'
// import { useState } from 'react'
// import { useEffect } from 'react'

// type Props = {
//     openNav: ()=> void ;
// };

// const Nav = ({openNav}:Props) => {

//     const [navBg , setNavBg] = useState(false);
//     useEffect (()=>{   
//         const handler =()=> {
//             if(window.scrollY > 90){
//                 setNavBg(true);
//             }
//             if(window.scrollY < 90){
//                 setNavBg(false);
//             }
//         };
//         window.addEventListener('scroll', handler);
//         return () => {
//             window.removeEventListener('scroll', handler);
//         }
//     },[])
//   return (
//     <div className ={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md': 'fixed'}duration-200 h-[12vh] z-[10000] fixed w-full`}>
// <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
//    <div className='flex items-center space-x-2'>
//     <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
//         <FaCode className = 'w-5 h-5 text-black' />
//         </div>
//         <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>NIGAAR KHATOON</h1>
//         </div> 
//         <div className='hidden lg:flex items-center space-x-10'>
//             {NavLinks.map((link)=>{
//                 return <Link key = {link.id} href = {link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
//                     <p>{link.label}</p>

//                 </Link>
//             })}
//         </div>
// <div className='flex items-center space-x-4'>
//     {/* <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2 '>
//         <BiDownload className='w-5 h-5'/>
//         <span>Download CV</span>
//     </button> */}

//     <a
//   href="/resume/Nigaar_Resume.pdf"
//   download
//   className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
// >
//   <BiDownload className="w-5 h-5" />
//   <span>Download CV</span>
// </a>
//     <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
// </div>

// </div>
//     </div>
//   )
// }

// export default Nav

"use client";

import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import { NavLinks } from "@/constant/constant";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY > 90);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-[12vh] z-[10000] transition-all duration-200 ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>

          <h1 className="hidden sm:block text-xl md:text-2xl font-bold text-white">
            NIGAAR KHATOON
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base font-medium text-white hover:text-cyan-300 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Download CV */}
          <a
            href="/resume/Nigaar_Resume.pdf"
            download
            className="px-8 py-3.5 rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2 text-sm"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
