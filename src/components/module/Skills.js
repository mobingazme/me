'use client'
import React from 'react'
import SvgDeveloper from '../../models/SvgDeveloper'
import SvgDeveloper1 from '../../models/SvgDeveloper1'
import SvgDeveloper2 from '../../models/SvgDeveloper2'
import SvgDeveloper3 from '../../models/SvgDeveloper3'
import SvgDeveloper4 from '../../models/SvgDeveloper4'

function Skills() {
    return (
        <div className='px-12'>
            <div className='grid grid-cols-5 items-center '>
                <div id='skills' className='col-span-2' >
                    <h6 data-aos="fade-left" data-aos-easing="ease-in-sine"  className='text-C '>_مهارت های من</h6>
                    <h2 data-aos="fade-left" data-aos-offset="800" data-aos-easing="ease-in-sine" className='text-6xl font-bold my-5'>چرا من را برای پروژه بعدی استخدام کنید؟</h2>
                   <div  data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                   <p> به عنوان یک برنامه‌نویس فرانت‌اند با بیش از دو سال تجربه، من مسلط به زبان JavaScript و فریم‌ورک‌هایی مانند Next.js و React هستم. در طول مسیر تحصیلی و کاری خود، با کتابخانه‌هایی مانند Tailwind CSS، Sass، Bootstrap، Yup، Redux، Redux Toolkit، Git، Flexbox، Grid، Zustand، Formik و Swiper ...   آشنا شده‌ام و توانایی استفاده موثر از آن‌ها را دارم. </p>
                    <p>تمرکز من بر ایجاد رابط‌های کاربری منحصر به فرد و جذاب برای کاربران است، و همچنین تضمین ارتقای تجربه کاربری از طریق بهینه‌سازی عناصر و افزودن انیمیشن‌ها و افکت‌های تصویری است. با دانش گسترده‌ای از اصول طراحی و توسعه وب، من می‌توانم به بهبود وبسایت شما کمک کنم و تجربه کاربری بهتری را برای مخاطبان فراهم کنم.</p>
                    <p> هدف من در آینده تبدیل شدن به یک Full Stack JavaScript Developer است. من تمایل دارم تا با تسلط بر تکنولوژی‌های بک‌اند و فرانت‌اند، به طراحی و توسعه برنامه‌های وب پیچیده و کارآمد بپردازم.</p>
                   </div>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='col-span-3 mr-20'>
                    <SvgDeveloper />
                </div>
                

            </div>


         
           
        </div>
    )
}

export default Skills


