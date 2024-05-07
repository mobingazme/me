'use client'
import React from 'react'
import SvgDeveloper from '../../models/SvgDeveloper'
import './textGradient.css';

function Skills() {
    return (
        <div id='skills'  className='md:px-12 px-4 '>
            <div className='grid grid-cols-1 md:grid-cols-5 items-center '>
                <div  className='col-span-1 md:col-span-2' >
                    <h6  data-aos="fade-left" data-aos-easing="ease-in-sine" className='text-gradient '>_مهارت های من</h6>
                    <h2 data-aos="fade-left" data-aos-easing="ease-in-sine" className='md:text-5xl text-2xl font-bold my-5'>چرا من را برای پروژه بعدی استخدام کنید؟</h2>
                    <div className='' data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                        <p className='text-center md:text-start'> به عنوان یک برنامه‌نویس فرانت‌اند با بیش از دو سال تجربه، من مسلط به زبان <span className='font-bold text-gradient'>JavaScript</span> و فریم‌ورک‌هایی مانند <span className='font-bold text-gradient '>Next.js و React</span> هستم. در طول مسیر تحصیلی و کاری خود، با کتابخانه‌هایی مانند <span className='font-bold text-gradient '>Tailwind CSS، Sass، Bootstrap، Yup، Redux، Redux Toolkit، Git، Flexbox، Grid، Zustand، Formik و Swiper ...</span>   آشنا شده‌ام و توانایی استفاده موثر از آن‌ها را دارم. </p>
                        <p className='text-center md:text-start'>تمرکز من بر ایجاد رابط‌های کاربری منحصر به فرد و جذاب برای کاربران است، و همچنین تضمین ارتقای تجربه کاربری از طریق بهینه‌سازی عناصر و افزودن انیمیشن‌ها و افکت‌های تصویری است. با دانش گسترده‌ای از اصول طراحی و توسعه وب، من می‌توانم به بهبود وبسایت شما کمک کنم و تجربه کاربری بهتری را برای مخاطبان فراهم کنم.</p>
                        <p className='text-center md:text-start'> هدف من در آینده تبدیل شدن به یک <span className='font-bold  text-gradient'>Full Stack JavaScript Developer</span> است. من تمایل دارم تا با تسلط بر تکنولوژی‌های بک‌اند و فرانت‌اند، به طراحی و توسعه برنامه‌های وب پیچیده و کارآمد بپردازم.</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='col-span-1 md:col-span-3 '>
                    <SvgDeveloper />
                </div>
            </div>
        </div>
    )
}

export default Skills


