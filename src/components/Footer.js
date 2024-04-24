import React from 'react';
import FooterImg from '../images/Footer.png'
import Logo from '../logo.svg'
import Facebook from '../images/Facebook.png'
import Insta from '../images/Instagram.png'
import Twitter from '../images/Twitter.png'
import Apple from '../images/App Store Badge.png'
import Play from '../images/Google Play Badge.png'

const Footer = () => {
  return (
    <div className='relative flex flex-col md:flex-row md:py-12 md:px-24 py-6 px-6 justify-between md:items-end items-center bg-[#0B0D17]'>
    <div className='md:w-1/2 w-full flex flex-col gap-8'>
        <img src={Logo} className='w-44'></img>
        <p className='text-white'>Greet is a subsidiary of Fydo (Lfyd Services Pvt Ltd), Your all-in-one event companion. From seamless ticket booking to personalized event recommendations, Explore local happenings, unlock exclusive deals, and connect with the heartbeat of your city at the same time a one stop platform designed to streamline the process of organizing events.</p>
        <div className='flex gap-4 text-white items-center flex-wrap'>
            <p>Download now</p>
            <p>Licence</p>
            <div className='flex items-center gap-2'>
            <p>Find us on:</p>
            
            <img src={Facebook} className='w-8 h-6 md:w-12 md:h-8'/>
            <img src={Twitter} className='w-8 h-6 md:w-12 md:h-8'/>
            <img src={Insta} className='w-8 h-6 md:w-12 md:h-8'/>
            </div>
            
        </div>
    </div>
    <div className='md:w-1/4 flex flex-col gap-6 mt-8 w-full '>
        <p className='text-white text-md'>Available from 9AM - 11PM<br/>
support@fydo.in<br/>
8447734227 & 8447734227</p>
<p className='text-white text-lg'>Get the app.</p>
<div className='flex gap-4'>
    <img src={Apple}/>
    <img src={Play}/>
</div>
    </div>
    <img className='absolute top-[-12] left-[-4]'src={FooterImg}/>
    </div>
  );
};

export default Footer;