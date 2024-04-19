import React from 'react'
import SvgDeveloper2 from '../../models/SvgDeveloper2'
import { Icon } from '@iconify/react';
import 'animate.css';

function Footer() {
  return (
    <div id="footer" className="footer bg-B text-white text-center p-1  flex justify-around items-center">

      <div  className='p-10'>
        <div>
          <div data-aos="zoom-in-letf" data-aos-offset="300" data-aos-easing="ease-in-sine" className=' flex justify-between w-fit items-center border-b border-b-C p-1'>
            <Icon className=' w-6 h-fit mx-1 text-C animate-bounce-slow' icon="material-symbols:call-sharp" />
            <span>09033695751</span>
          </div>
          <div data-aos="zoom-in-letf" data-aos-offset="400" data-aos-easing="ease-in-sine" className=' flex justify-between w-fit items-center border-b border-b-C my-4 p-1'>
            <Icon className=' w-6 h-fit mx-1 text-C animate__rubberBand animate__animated  animate__infinite animate__slower 	2s' icon="bxl:gmail" />
            <span>mobingazmeh1@gmail.com</span>
          </div>
          <div data-aos="zoom-in-letf" data-aos-offset="500" data-aos-easing="ease-in-sine" className=' flex justify-between w-fit items-center border-b border-b-C p-1'>
            <Icon className=' w-6 h-fit mx-1 text-C animate__flash animate__animated  animate__infinite animate__slower 	2s' icon="mdi:location" />
            <span>استان گلستان.گنبدکاووس</span>
          </div>
        </div>

        <div data-aos="zoom-in-letf" data-aos-offset="600" data-aos-easing="ease-in-sine" className='flex justify-between mt-10'>
          <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D  duration-700 delay-100' icon="ic:baseline-whatsapp" />
          <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D duration-700 delay-100' icon="teenyicons:instagram-outline" />
          <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D duration-700 delay-100' icon="bi:telegram" />
          <Icon className='w-9 h-fit cursor-pointer text-C ease-in transition-all transform hover:translate-y-[10px] hover:text-D duration-700 delay-100' icon="bi:github" />
        </div>
      </div>



      <div data-aos="zoom-in-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
        <SvgDeveloper2 />
      </div>

    </div>
  )
}

export default Footer