
"use client"
import { Link as ScrollLink } from 'react-scroll';
import { Icon } from '@iconify/react';
import 'animate.css';
import './../components/module/BgGradient.css';
import { useState, useEffect } from 'react';

const ButtonToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 0); // تنظیم isVisible به true اگر scrollTop بزرگتر از 0 است و به false در غیر این صورت
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollLink
            activeClass="active"
            to="1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
        >
            <div
                className={`bg-gradient animate__slow animate__animated animate__fadeInUp font-bold cursor-pointer flex justify-center items-center fixed bottom-4 left-4 md:bottom-20 md:left-20 z-50 shadow-sm shadow-D duration-700 ease-in transition-all w-12 h-12 rounded-full text-black ${isVisible ? 'visible' : 'hidden'}`}
            >
                <Icon className='text-B w-10 h-fit' icon="line-md:upload-loop" />
            </div>
        </ScrollLink>
    );
}

export default ButtonToTop;

  