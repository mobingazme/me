"use client"
import ContactButten from '@/elements/ContactButten'
import Image from 'next/image'
import 'animate.css';
import { Icon } from '@iconify/react';


function SectionOne() {
    return (
        <div className=' w-full grid grid-cols-3 items-center  bg-B shadow-xl'>
            <div className='col-span-1 p-10'>
                <h6 data-aos="fade-up" className='text-C animate__animated animate__fadeInUp animate__delay-1s' >_معرفی</h6>
                <h2 data-aos="fade-up" data-aos-duration="2000" className='text-white font-bold text-8xl animate__animated animate__fadeInUp animate__delay-2s'>سلام<br /> من <span className='text-C'> مبین</span> <br />هستم!</h2>
                <p data-aos="fade-up" data-aos-duration="3000" className='text-xl my-5'>به وبسایت شخصی من خوش آمدید. من یک توسعه‌دهنده وب فرانت‌اند هستم و مشتاقم تا تجربیات و مهارت‌هایم را با شما به اشتراک بگذارم.</p>
                <div data-aos="fade-up" data-aos-duration="4000">
                    <ContactButten  />
                </div>
            </div>
            <div className='col-span-2 flex justify-center items-center w-full  p-10'>
                <div className='relative w-full h-full'>
                    <svg id="character-background-area" viewBox="0 60 500 500" fill="none" className="absolute left-12 top-4 z-10 ">
                        <path className='animate__animated animate__slower  animate__rotateIn' stroke="#64f4ab" opacity="0.47" d="M51.1106 140.823C55.3792 113.059 78.8827 92.4646 106.966 91.5975C150.364 90.2575 214.276 88.963 261.947 90.8933C308.471 92.7773 370.164 98.9734 413.214 103.774C442.528 107.042 464.78 131.482 465.326 160.973C467.106 257.034 464.32 326.677 454.913 420.963C451.926 450.905 426.877 473.683 396.785 473.919C353.601 474.258 292.51 474.271 246.498 472.407C199.354 470.498 136.591 465.347 93.4387 461.482C64.8438 458.921 42.1923 436.225 40.1612 407.599C33.1808 309.221 36.0823 238.57 51.1106 140.823Z" strokeWidth="5"></path>
                        <path className='animate__animated animate__slow  animate__rotateIn' stroke="#64f4ab" opacity="0.47" d="M79.2298 107.62C88.3548 81.0534 115.138 64.9539 142.93 69.0812C185.878 75.4592 249.006 85.52 295.579 95.8744C341.031 105.979 400.648 123.019 442.163 135.378C470.433 143.794 487.998 171.792 483.305 200.913C468.02 295.767 452.927 363.812 426.948 454.935C418.698 483.873 390.006 501.847 360.349 496.742C317.789 489.417 257.665 478.595 212.713 468.601C166.654 458.361 105.8 442.159 64.0174 430.703C36.33 423.111 18.0628 396.758 21.1407 368.225C31.7186 270.169 47.1041 201.152 79.2298 107.62Z" strokeWidth="5"></path>
                    </svg>
                    <div className=''>
                        <Icon className='text-C w-12 h-12 absolute top-72 left-44 animate__animated animate__slower animate__infinite animate__flash' icon="teenyicons:nextjs-solid" />
                        <Icon className='text-C w-12 h-12 absolute top-60 right-36  animate-bounce-slow' icon="simple-icons:tailwindcss" />
                        <Icon className='text-C w-12 h-12 absolute top-40 right-52 animate__animated animate__slower animate__infinite animate__rotateIn' icon="akar-icons:react-fill" />
                        <Icon className='text-C w-12 h-12 absolute top-36 left-52 animate__animated animate__heartBeat animate__slower animate__infinite' icon="fluent:code-js-16-regular" />
                        <Icon className='text-C w-12 h-12 absolute bottom-40 left-48 animate__animated animate__rotateIn animate__slower animate__infinite' icon="akar-icons:redux-fill" />
                        <Icon className='text-C w-12 h-12 absolute bottom-60 right-32 animate__animated animate__rubberBand animate__slower animate__infinite' icon="fa6-brands:sass" />
                        <Icon className='text-C w-12 h-12 absolute bottom-20 right-80 animate__animated animate__tada animate__slower animate__infinite' icon="cib:bootstrap" />
                    </div>

                    <Image data-aos="zoom-in" className='z-10 mr-44 mt-20 ' width={400} height={400} alt='logo' src='/images/hero-img.png' />
                </div>

            </div>
        </div>
    )
}

export default SectionOne

