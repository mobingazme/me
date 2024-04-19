"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
// import required modules

const data = [
    {
        id: 1,
        title: 'NEXT',
        icon: "teenyicons:nextjs-solid",
    },
    {
        id: 2,
        title: 'REACT',
        icon: "akar-icons:react-fill",
    },
    {
        id: 3,
        title: 'HTML',
        icon: "cib:html5",
    },
    {
        id: 4,
        title: 'CSS',
        icon: "flowbite:css-solid",
    },
    {
        id: 5,
        title: 'TAILWIND',
        icon: "simple-icons:tailwindcss",
    },
    {
        id: 6,
        title: 'BOOTSTRAP',
        icon: "cib:bootstrap",
    },
    {
        id: 7,
        title: 'SASS',
        icon: "fa6-brands:sass",
    },
    {
        id: 8,
        title: 'JS',
        icon: "raphael:js",
    },
    {
        id: 9,
        title: 'REDUX',
        icon: "akar-icons:redux-fill",
    },
    {
        id: 10,
        title: 'GIT',
        icon: "simple-icons:git",
    },
    {
        id: 11,
        title: 'Swiper',
        icon: "simple-icons:swiper",
    },
];

const SliderRight = ({ direction }) => {
    return (
        <Swiper
            dir="rtl"
            slidesPerView={8}
            spaceBetween={30}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            direction={direction}
        >
            {data.map((item) => (
                <SwiperSlide data-aos="flip-up" className='mt-8' key={item.id}>
                    <div className='bg-B hover:bg-D hover:font-bold ease-in transition-all transform hover:translate-y-[-10px] cursor-pointer duration-700 text-C hover:text-B duration-900 flex flex-col justify-center items-center p-4 rounded-full w-28'>
                        <Icon className='w-12 h-12' icon={item.icon} />
                        <h2 className='mt-3'>{item.title}</h2>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

const Sliderleft = ({ direction }) => {
    return (
        <Swiper
            dir="ltr"
            slidesPerView={8}
            spaceBetween={30}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            direction={direction}
        >
            {data.map((item) => (
                <SwiperSlide data-aos="flip-up" className='py-6' key={item.id}>
                    <div className='bg-B hover:bg-D hover:font-bold shadow-2xl ease-in transition-all transform hover:translate-y-[-10px] cursor-pointer duration-700 text-C hover:text-B duration-900 flex flex-col justify-center items-center p-4 rounded-full w-28'>
                        <Icon className='w-12 h-12' icon={item.icon} />
                        <h2 className='mt-3'>{item.title}</h2>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}



const SkillSlider = () => {

    return (
        <div className='my-10 px-10'>
            <SliderRight />
            <Sliderleft />
        </div>
    )


}







export default SkillSlider