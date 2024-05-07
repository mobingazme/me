"use client"
import Link from 'next/link';
import SvgDeveloper1 from '@/models/SvgDeveloper1';
import SvgDeveloper3 from '@/models/SvgDeveloper3';
import React from 'react';
import './textGradient.css';


function About() {
    return (
        <div id="abute" className='bg-A   md:my-10 md:p-10 grid grid-cols-1 justify-center  md:grid-cols-5 items-center md:rounded-lg '>
            <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='md:col-span-2'>
                <SvgDeveloper3 />
            </div>
            <div className='md:col-span-3 bg-B p-5 w-full rounded-xl shadow-lg'>
                <h4 data-aos="fade-right" data-aos-easing="ease-in-sine" className='text-gradient font-bold mb-5'>_درباره من</h4>
                <h2 data-aos="fade-right"  data-aos-easing="ease-in-sine" className='md:text-6xl text-3xl text-center font-bold mb-5'>اطلاعات شخصی</h2>
                <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                    <p className=' md:text-xl mb-1 md:mb-3 text-center md:text-start'>من مبین هستم، ۲۳ سال سن دارم و دانشجوی رشته مهندسی نرم‌افزار  هستم.</p>
                    <p className='md:text-xl mb-1 md:mb-3 text-center md:text-start'>از دو سال پیش، یادگیری برنامه‌نویسی را آغاز کرده‌ام. منابع اصلی یادگیری من شامل وب‌سایت‌هایی مانند <span className='text-gradient hover:text-D duration-700 ease-in transition-all transform text-xl md:hover:text-2xl font-bold cursor-pointer'><Link href='https://roocket.ir'> roocket </Link></span>
                        و <span className='text-gradient hover:text-D text-xl duration-700 ease-in transition-all transform md:hover:text-2xl font-bold cursor-pointer' > <Link href='https://botostart.ir'> botostart </Link></span> بوده و همچنین از مستندات تخصصی و ویدیوهای آموزشی یوتوب برای پیشبرد دانش خود استفاده کرده‌ام.</p>
                    <p className='md:text-xl text-center md:text-start'>از پروژه‌ها و تجربیات برنامه‌نویسی خودم به عنوان ابزاری برای تقویت مهارت‌هایم استفاده می‌کنم و همواره در جستجوی یادگیری و پیشرفت هستم.</p>
                </div>
            </div>
        </div>
    );
}
export default About




