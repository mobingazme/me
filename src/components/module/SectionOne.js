"use client"
import ContactButten from '@/elements/ContactButten'
import Image from 'next/image'
import 'animate.css';
import { Icon } from '@iconify/react';
import './textGradient.css'

function SectionOne() {
    return (
        <div id='1' className=' w-full grid grid-cols-1 md:grid-cols-3 items-center  bg-B shadow-xl pt-40 md:pt-5'>
            <div className='col-span-1 p-4 md:p-10'>
                <h6 data-aos="fade-up" className='text-gradient animate__animated animate__fadeInUp animate__delay-1s' >_معرفی</h6>
                <h2 data-aos="fade-up" data-aos-duration="2000" className='text-white pt-4 md:pt-0 font-bold text-4xl md:text-7xl  animate__animated animate__fadeInUp animate__delay-2s'>سلام<br /> من <span className='text-gradient'> مبین</span> <br className='hidden md:flex' />هستم!</h2>
                <p data-aos="fade-up" data-aos-duration="3000" className='md:text-xl text-center md:text-start my-3'>به وبسایت شخصی من خوش آمدید. من یک توسعه‌دهنده وب. فرانت‌اند هستم و مشتاقم تا تجربیات و مهارت‌هایم را با شما به اشتراک بگذارم.</p>
                <div className=' flex justify-center md:justify-start' data-aos="fade-up" data-aos-duration="4000">
                    <ContactButten />
                </div>
            </div>
            <div className='col-span-2 flex justify-center items-center w-full p-2 md:p-10'>
                <div className='relative w-full h-full '>
                    <svg id="character-background-area" viewBox="0 60 500 500" fill="none" className="absolute left-12 top-4  z-40 hidden lg:flex ">
                        <path className='animate__animated animate__slower  animate__rotateIn' stroke="#64f4ab" opacity="0.47" d="M51.1106 140.823C55.3792 113.059 78.8827 92.4646 106.966 91.5975C150.364 90.2575 214.276 88.963 261.947 90.8933C308.471 92.7773 370.164 98.9734 413.214 103.774C442.528 107.042 464.78 131.482 465.326 160.973C467.106 257.034 464.32 326.677 454.913 420.963C451.926 450.905 426.877 473.683 396.785 473.919C353.601 474.258 292.51 474.271 246.498 472.407C199.354 470.498 136.591 465.347 93.4387 461.482C64.8438 458.921 42.1923 436.225 40.1612 407.599C33.1808 309.221 36.0823 238.57 51.1106 140.823Z" strokeWidth="5"></path>
                        <path className='animate__animated animate__slow  animate__rotateIn' stroke="#64f4ab" opacity="0.47" d="M79.2298 107.62C88.3548 81.0534 115.138 64.9539 142.93 69.0812C185.878 75.4592 249.006 85.52 295.579 95.8744C341.031 105.979 400.648 123.019 442.163 135.378C470.433 143.794 487.998 171.792 483.305 200.913C468.02 295.767 452.927 363.812 426.948 454.935C418.698 483.873 390.006 501.847 360.349 496.742C317.789 489.417 257.665 478.595 212.713 468.601C166.654 458.361 105.8 442.159 64.0174 430.703C36.33 423.111 18.0628 396.758 21.1407 368.225C31.7186 270.169 47.1041 201.152 79.2298 107.62Z" strokeWidth="5"></path>
                    </svg>
                    <div className=''>
                        <Icon className='text-C w-12 h-12 absolute  lg:top-72 top-52  lg:left-44 left-8 animate__animated animate__slower animate__infinite animate__flash z-40' icon="teenyicons:nextjs-solid" />
                        <Icon className='text-C w-12 h-12 absolute  lg:top-60 top-52  lg:right-36 right-8  animate-bounce-slow z-40' icon="simple-icons:tailwindcss" />
                        <Icon className='text-C w-12 h-12 absolute  lg:top-40 top-10  lg:right-52 right-8 animate__animated animate__slower animate__infinite animate__rotateIn z-40' icon="akar-icons:react-fill" />
                        <Icon className='text-C w-12 h-12 absolute  lg:top-36 top-10  lg:left-52 left-8 animate__animated animate__heartBeat animate__slower animate__infinite z-40' icon="fluent:code-js-16-regular" />
                        <Icon className='text-C w-12 h-12 absolute  lg:bottom-40 bottom-32  lg:left-48 left-8 animate__animated animate__rotateIn animate__slower animate__infinite z-40' icon="akar-icons:redux-fill" />
                        <Icon className='text-C w-12 h-12 absolute  lg:bottom-60 bottom-32  lg:right-32 right-8 animate__animated animate__rubberBand animate__slower animate__infinite z-40' icon="fa6-brands:sass" />
                        <Icon className='text-C w-12 h-12 absolute  lg:bottom-20 bottom-10  lg:right-80 right-36 animate__animated animate__tada animate__slower animate__infinite z-40' icon="cib:bootstrap" />
                    </div>
                    <div   data-aos="zoom-in-up" data-aos-duration="1500">
                        <Image className='z-10 p-5 md:mr-20 lg:mr-40 md:mt-20 mt-10 ' width={400} height={300} alt='logo' src='/images/IMG_9793.png' /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne

