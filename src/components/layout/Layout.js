"use client"
import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';


function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout