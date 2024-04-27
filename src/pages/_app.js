"use client"
import "@/styles/globals.css";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    })
  }, [])
  return <Component {...pageProps} />;
}
