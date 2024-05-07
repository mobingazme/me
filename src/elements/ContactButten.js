"use client"
import React from 'react';
import { Link } from 'react-scroll';
import './../components/module/BgGradient.css'


function ContactButton() {
  return (
    <Link

      to="footer"
      spy={true}
      smooth={true}
      duration={500}
    >
      <button className=' font-bold  bg-gradient shadow-sm shadow-D duration-700  transform ease-in transition-all    w-60 md:w-32 h-12 rounded-xl text-black  hover:text-lg'>ارتباط با من</button>
    </Link>
  );
}

export default ContactButton;
//jobvision.ir/cv/28896610-163929