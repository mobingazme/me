'use client'
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image'

import 'animate.css';


function BannerWorkSample() {

    return (
        <div className='grid grid-cols-2  gap-10 p-12 bg-B shadow-lg' >
            <div>
                <div data-aos="zoom-in-right"className=' w-full  relative cursor-pointer overflow-hidden  shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
                    <Image width={500} height={500} alt='mahbano' className='w-full h-full ' src='/images/Screenshot 2024-04-18 104643.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 bg-black/50'>
                        <div className='bg-A text-C p-4 rounded-lg'>
                            <Link href='/store'>
                                نمایش وبسایت
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' py-5'>
                    <h4  data-aos="fade-left" data-aos-easing="ease-in-sine" className='text-C text-3xl py-2'>_ماه بانو</h4>
                    <p data-aos="fade-left" data-aos-offset="800" className='text-center text-sm'>این وبسایت فروشگاهی با استفاده از آخرین تکنولوژی‌های فرانت‌اند شامل <span className='text-C text-sm '>Next.js 14  (App Router)</span><br/>, Zustand, animate.css, Yup, Swiper, Tailwind CSS, و Formik طراحی و پیاده‌سازی شده است تا تجربه خرید آنلاین بی‌نظیری برای مشتریان فراهم آورد. با کاربری آسان و تجربه کاربری پویا، این پلتفرم به کاربران امکان می‌دهد به راحتی محصولات مورد نظر خود را جستجو، مشاهده و خریداری کنند.</p>
                    <div data-aos="fade-up" data-aos-duration="1000" className=' text-C hover:text-D duration-700  flex cursor-pointer ease-in transition-all transform hover:translate-x-[-10px] items-center pt-3 w-32 justify-between '>
                        <h5 className=''>دانلود از github</h5>
                        <Icon className='w-8 h-fit' icon="mdi:github" />
                    </div>
                </div>

            </div>


            <div>
                <div data-aos="zoom-in-left" className=' w-full  relative cursor-pointer overflow-hidden  shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
                    <Image width={500} height={500} alt='mahbano' className='w-full h-full ' src='/images/Screenshot 2024-04-18 104643.png' />
                    <div className='absolute inset-0 flex items-center justify-center opacity-0   ease-in transform hover:opacity-100 transition-opacity duration-700 bg-black/50'>
                        <div className='bg-A text-C p-4 rounded-lg'>
                            <Link href='/store'>
                                نمایش وبسایت
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' py-5'>
                    <h4 data-aos="fade-right" data-aos-easing="ease-in-sine" className='text-C text-3xl py-2'>_ماه بانو</h4>
                    <p data-aos="fade-right" data-aos-offset="800" className='text-center text-sm'>این وبسایت فروشگاهی با استفاده از آخرین تکنولوژی‌های فرانت‌اند شامل <span className='text-C text-sm '>Next.js 14  (App Router)</span><br/>, Zustand, animate.css, Yup, Swiper, Tailwind CSS, و Formik طراحی و پیاده‌سازی شده است تا تجربه خرید آنلاین بی‌نظیری برای مشتریان فراهم آورد. با کاربری آسان و تجربه کاربری پویا، این پلتفرم به کاربران امکان می‌دهد به راحتی محصولات مورد نظر خود را جستجو، مشاهده و خریداری کنند.</p>
                    <div data-aos="fade-up" data-aos-duration="1000" className=' text-C hover:text-D duration-700  flex cursor-pointer ease-in transition-all transform hover:translate-x-[-10px] items-center pt-3 w-32 justify-between '>
                        <h5 className=''>دانلود از github</h5>
                        <Icon className='w-8 h-fit' icon="mdi:github" />
                    </div>
                </div>

            </div>





        </div>
    )
}

export default BannerWorkSample














