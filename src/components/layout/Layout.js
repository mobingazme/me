"use client"
import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';
import ButtonToTop from '@/elements/ButtonToTop';


function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div>{children}</div>
      <ButtonToTop />
      <Footer />
    </div>
  )
}

export default Layout