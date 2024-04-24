import React, { useState } from 'react';
import Logo from '../logo.svg'
import DropBar from '../dropbar.svg'
import Profile from '../images/Profile1.png'

const Navbar = () => {
  const screenWidth = window.innerWidth;
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="relative w-full md:h-[72px] h-[60px] bg-[#0B0D17]  px-4 py-2 md:px-8"  >
    <div className='w-full py-2 flex justify-between mx-auto items-center  top-0'>
      {/* //Logo */}
      <div><img className='w-[125px] md:w-[229px]' src={Logo}/></div> 

      {/* menu for small device */}
      <div className="block lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            
            </svg>
          </button>
        </div>

    {/* OPtions   */}
      <div className={`lg:flex hidden text-[white] space-x-8 text-sm  `}>
        <p className=' flex gap-2'>
        <span className='hidden lg:block'>Browsing events in</span> 
        {screenWidth >= 1109 ?
          (<span className='flex gap-2'>
        <img src={DropBar}/>
        <p className="text-red-500 underline-white font-semibold">
        Bhubaneshwar 
        </p>
        </span>) :
        (<span className='flex gap-2'>
        
        <p className="text-red-500 underline-white font-semibold">
        Bhubaneshwar 
        </p>
        <img src={DropBar}/>
        </span>)
        }
        
        </p>
        <p>Contact Us</p>
        <p>FAQs</p>

      </div>

      {/* Button */}
      <div className={`lg:flex space-x-2 mx-6 hidden  ${isOpen ? 'block' : 'hidden'}`}>
         <div>
          <button className="w-[141px] h-[40px] rounded-md p-[10px 20px] gap-10 bg-[#FE3838] text-white">
            List Your Event
          </button>
         </div>
         <div>
         <img src={Profile} alt="Profile" className="w-10 h-10 rounded-full mx-4" />

         </div>
      </div>
    </div>
    {isOpen && <div className='absolute w-full left-0 p-4 m-0 flex flex-col bg-[#0B0D17] text-white gap-2 z-2'>
    <p>Contact US</p>
    <p>FAQs</p>
    <button className="w-[130px] h-[35px] rounded-md p-[10px 20px] gap-10 bg-[#FE3838] text-white mx-auto">
            List Your Event
          </button>
          <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full mx-4" />
    </div>}
    </div>

  );
};

export default Navbar;
