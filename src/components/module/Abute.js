"use client"
import Link from 'next/link';
import SvgDeveloper1 from '@/models/SvgDeveloper1';
import SvgDeveloper3 from '@/models/SvgDeveloper3';
import React from 'react';

function About() {
    return (
        <div id="abute" className='bg-A  my-10 p-10 grid grid-cols-5 items-center rounded-lg '>
            <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='col-span-2'>
                <SvgDeveloper3 />
            </div>
            <div className='col-span-3 bg-B p-5 rounded-xl shadow-lg'>
                <h4 data-aos="fade-right" data-aos-easing="ease-in-sine" className='text-C font-bold mb-5'>_درباره من</h4>
                <h2 data-aos="fade-right" data-aos-offset="800" data-aos-easing="ease-in-sine" className='text-6xl  font-bold mb-5'>اطلاعات شخصی</h2>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <p className='text-xl mb-3'>من مبین هستم، ۲۳ سال سن دارم و دانشجوی رشته مهندسی نرم‌افزار در دانشگاه آزاد گنبد کاووس هستم.</p>
                    <p className='text-xl mb-3'>از دو سال پیش، یادگیری برنامه‌نویسی را آغاز کرده‌ام. منابع اصلی یادگیری من شامل وب‌سایت‌هایی مانند <span className='text-C hover:text-D duration-700 ease-in transition-all transform text-xl hover:text-2xl font-bold cursor-pointer'><Link href='https://roocket.ir'>roocket</Link></span>
                        و <span className='text-C hover:text-D text-xl duration-700 ease-in transition-all transform hover:text-2xl font-bold cursor-pointer' > <Link href='https://botostart.ir'>botostart</Link></span> بوده و همچنین از مستندات تخصصی و ویدیوهای آموزشی یوتوب برای پیشبرد دانش خود استفاده کرده‌ام.</p>
                    <p className='text-xl'>ساکن استان گلستان در شهرستان گنبد کاووس هستم و در حال حاضر مجرد می‌باشم.</p>
                    <p className='text-xl'>از پروژه‌ها و تجربیات برنامه‌نویسی خودم به عنوان ابزاری برای تقویت مهارت‌هایم استفاده می‌کنم و همواره در جستجوی یادگیری و پیشرفت هستم.</p>
                </div>
            </div>
        </div>
    );
}
export default About




