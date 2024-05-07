import React from 'react'
import SvgDeveloper2 from '../../models/SvgDeveloper2'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import 'animate.css';
import ButtonResume from '@/elements/ButtonResume';
import './../module/textGradient.css'

function Footer() {
  return (
    <div id="footer" className="footer bg-B text-white text-center p-1 grid col-span-1  md:flex  md:justify-center items-center shadow-lg">

      <div className='md:p-10 p-8'>
        <div>
          <div data-aos="zoom-in-letf" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' flex justify-between w-fit items-center border-b border-b-C p-1'>
            <Icon className=' w-6 h-fit mx-1 text-C animate-bounce-slow' icon="material-symbols:call-sharp" />
            <span className='text-gradient'>09033695751</span>
          </div>
          <div data-aos="zoom-in-letf" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' flex justify-between w-fit items-center border-b border-b-C my-4 p-1'>
            <Icon className=' w-6 h-fit mx-1 text-C animate__rubberBand animate__animated  animate__infinite animate__slower 	2s' icon="bxl:gmail" />
            <span className='text-gradient'>mobingazmeh1@gmail.com</span>
          </div>
          <div data-aos="zoom-in-letf" data-aos-duration="1000" data-aos-easing="ease-in-sine" className=' flex justify-between w-fit items-center border-b border-b-C p-1'>
            <Icon className=' w-6 h-fit mx-1 text-C animate__flash animate__animated  animate__infinite animate__slower 	2s' icon="mdi:location" />
            <span className='text-gradient'>استان گلستان.گنبدکاووس</span>
          </div>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1500" className='flex justify-around md:justify-between mt-10'>
          <Link href={'https://wa.me/989033695751'}>
            <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D  duration-700 delay-100' icon="ic:baseline-whatsapp" />
          </Link>
          <Link href={'https://www.linkedin.com/in/mobin-gazmeh'}>
            <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D  duration-700 delay-100' icon="brandico:linkedin-rect" />
          </Link>
          <Link href={'https://www.instagram.com/_mobingm'}>
            <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D duration-700 delay-100' icon="teenyicons:instagram-outline" />
          </Link>
          <Link href={'https://t.me/Mobin_gazmeh'}>
            <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D duration-700 delay-100' icon="bi:telegram" />
          </Link>
          <Link href={'https://github.com/mobingazme'}>
            <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D duration-700 delay-100' icon="bi:github" />
          </Link>
        </div>
      </div>
      <div className='md:hidden flex justify-center px-5 w-full'>
        <ButtonResume />
      </div>

      <div data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
        <SvgDeveloper2 />
      </div>


    </div>
  )
}

export default Footer

