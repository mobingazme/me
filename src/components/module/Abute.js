"use client"
import Link from 'next/link';
import SvgDeveloper1 from '@/models/SvgDeveloper1';
import SvgDeveloper3 from '@/models/SvgDeveloper3';
import React from 'react';
import './textGradient.css';


function About() {
    return (
        <div id="abute" className='bg-A  py-3  md:my-10 md:p-10 grid grid-cols-1 justify-center  md:grid-cols-5 items-center md:rounded-lg '>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-easing="ease-in-sine" className='md:col-span-2'>
                <SvgDeveloper3 />
            </div>
            <div className='md:col-span-3 bg-B p-5 w-full rounded-xl shadow-lg'>
                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='text-gradient font-bold mb-5'>_درباره من</h4>
                <h2 data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-in-sine" className='md:text-5xl text-3xl text-center font-bold mb-5 text-white'>اطلاعات شخصی</h2>
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                    <p className='  mb-1 md:mb-3 text-center md:text-start text-white'>من مبین هستم، ۲۳ سال سن دارم و دانشجوی رشته مهندسی نرم‌افزار  هستم.</p>
                    <p className=' mb-1 md:mb-3 text-center md:text-start text-white'>از دو سال پیش، یادگیری برنامه‌نویسی را آغاز کرده‌ام. منابع اصلی یادگیری من شامل وب‌سایت‌هایی مانند <span className='text-gradient hover:text-D duration-700 ease-in transition-all transform  md:hover:text-lg font-bold cursor-pointer'><Link href='https://roocket.ir'> roocket </Link></span>
                        و <span className='text-gradient hover:text-D  duration-700 ease-in text-white transition-all transform md:hover:text-lg font-bold cursor-pointer' > <Link href='https://botostart.ir'> botostart </Link></span> بوده و همچنین از مستندات تخصصی و ویدیوهای آموزشی یوتوب برای پیشبرد دانش خود استفاده کرده‌ام.</p>
                    <p className=' text-center md:text-start text-white'>از پروژه‌ها و تجربیات برنامه‌نویسی خودم به عنوان ابزاری برای تقویت مهارت‌هایم استفاده می‌کنم و همواره در جستجوی یادگیری و پیشرفت هستم.</p>
                </div>
            </div>
        </div>
    );
}
export default About




