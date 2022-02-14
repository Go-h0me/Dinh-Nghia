import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from 'next-themes'

const Sidebar = () => {

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : "light")
  }
  return (
    <div>
      <Image
        src='https://cdn.pixabay.com/photo/2021/01/04/14/00/balloons-5887644__340.jpg'
        alt='avatar'
        className='mx-auto border rounded-full '
        height='128px'
        width='128px'
        quality='100'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider'>
        <span className='text-green'>Submit</span>
        Dey
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
        Web Developer
      </p>
      {/* Resume */}
      <a
        className='px-2 py-1 my-3 bg-gray-200 rounded-full'
        href='/images/blink.jpg'
        download='blink.jpg'
      >
        <GiTie className='w-6 h-6' />
        Download Resume
      </a>
      {/* //social icon */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'
      
      >
        <a href=''>
          <AiFillYoutube className='w-8 h-8 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* address */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-back-500'
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Hanoi,VietNam</span>
        </div>
        <p className='my-2'>tueminh6492@gmail.com</p>
        <p className='my-2'>12345678/123789456</p>
      </div>
      {/* Email Button */}
      <button
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
        onClick={() => window.open("mailto:  tueminh6492@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
