'use client'
import React, { useState, useEffect } from 'react';
import './../components/module/BgGradient.css';
import { Icon } from '@iconify/react';
import './../components/module/textGradient.css';
import Lottie from 'lottie-react';
import animationData from '/public/animations/AnimationLoading.json'; // مسیر فایل JSON

function ButtonResume() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    const fileURL = '/public/resume/مبین_گزمه-fa-1-7.pdf';
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = 'مبین_گزمه-fa-1.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000); // تنظیم زمان مدت نمایش لودینگ به میلی ثانیه
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
   <div data-aos="zoom-in-up" data-aos-duration="1500">
     <div  className={`shadow-sm shadow-C duration-700 mx-2 cursor-pointer transform ease-in text-C hover:text-B hover:bg-C transition-all flex items-center justify-center w-60 md:w-32 h-12 rounded-xl border-C p-2 ${loading ? 'cursor-not-allowed opacity-50' : ''}`} onClick={handleDownload}>
      {loading ? (
        <div className='w-24'>
          <Lottie animationData={animationData} />
        </div>
      ) : (
        <>
          <h6 className='text-sm font-bold'>دانلود رزومه</h6>
          <Icon className='w-8 h-fit' icon="line-md:download-loop" />
        </>
      )}
    </div>
   </div>
  );
}

export default ButtonResume;

