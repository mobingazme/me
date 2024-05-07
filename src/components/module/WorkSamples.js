"use client"
import React from 'react'
import SvgDeveloper4 from '../../models/SvgDeveloper4'
import BannerWorkSample from '@/models/BannerWorkSample'
import './textGradient.css'
function WorkSamples() {
    return (
        <div id="workSamples" className=' md:px-12  '>
            <div className='grid grid-cols-1 md:grid-cols-5 px-4 items-center '>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='md:col-span-2'>
                    <SvgDeveloper4 />
                </div>
                <div className='md:col-span-3' >
                    <h6 data-aos="fade-right" data-aos-easing="ease-in-sine" className='text-gradient'>_نمونه کار ها</h6>
                    <h2 data-aos="fade-right"   data-aos-easing="ease-in-sine" className='md:text-5xl text-2xl font-bold my-5'>سفری از یادگیری تا پیاده‌سازی در فرانت‌اند</h2>
                    <p className='text-center pb-2 md:pb-0 md:text-start' data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">علی‌رغم اینکه دوران آموزشی ام را تازه پشت سر گذاشته‌ام، اما تلاش کرده‌ام که با استفاده از آخرین فناوری‌ها و کتابخانه‌ها در زمینه برنامه‌نویسی فرانت‌اند، پروژه‌هایی را به تنهایی و یا در تیم‌های کوچک به انجام برسانم. این نمونه کارها، شاید محدود باشند، اما بازتاب‌دهنده توانایی‌ام در یادگیری سریع و کاربرد دانش فنی در موقعیت‌های واقعی است. هر پروژه برای من فرصتی بوده است تا مهارت‌هایم را تقویت کنم و درک عمیق‌تری از توسعه وب به دست آورم.</p>
                </div>
            </div>
            <div  className='pb-10'>
                <BannerWorkSample/>
            </div>
        </div>
    )
}

export default WorkSamples

