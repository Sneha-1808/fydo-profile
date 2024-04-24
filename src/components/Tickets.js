import React from 'react';
import Subtract from '../images/Subtract.png';
import Ipl from '../images/ipl.png'
import Greet from '../images/greet.png'
import Qr from '../images/qr.png'
import IplBg from '../images/iplBg.png'

const Ticket = () => {
  return (
    // <div className="relative bg-[#FFF5F5] md:px-36 px-4 mx-auto pt-20 md:pb-48 w-full h-full">
    //   {/* Image */}
    //   <img src={Subtract} alt="Placeholder" className="items-center w-full  md:rotate-0 rotate-90 overflow-hidden" />

    //   {/* Text Overlay */}
    //   <div className=" absolute top-0 md:top-20 left-32  flex flex-col md:flex-row items-center overflow-hidden gap-8">
    //   <div className=' w-84 h-100 overflow-hidden'>
    //     <img src={IplBg} className=' relative md:block hidden top-0 left-0  object-cover inset-0'/>
    //     <img src={Ipl} className='absolute items-center mx-auto top-0 z-1'/>
    //   </div>
        
    //     <div className='flex flex-col gap-8 w-64'>
    //     <div className='flex flex-col gap-4'>
    //     <p className='font-bold text-lg'>IPL Match: Group stage match between CSK and KKR</p>
    //       <p className='font-sm text-gray-700'>Chepauk Stadium, Victoria Hostel Road, Triplicane, Chennai, Tamil Nadu 600005, India</p>
    //       <p className='font-bold text-red-600'>19:00 PM | 08-April-2024</p>
    //       <p className='font-gray-700'>Quantity: 2</p>
    //       <p className='fold-md'>E Executive Lounge: 2 tickets</p>
    //     </div>
    //       <div className='flex justify-between'>
    //         <p className='text-green-500 font-bold'>Amount Paid:</p>
    //         <p className='text-md'>Rs. 1920</p>
    //       </div>
    //     </div>

    //     <div className='flex flex-col gap-8 ml-8'>
    //   <div className='flex flex-col gap-4'>
    //     <img src={Qr} className='w-32 h-32'/>
    //     <p>ZAASS25SDHGS27</p>
    //   </div>
    //   <div className='flex flex-col gap-4'>
    //     <p>Tickets Powered by</p>
    //     <img src={Greet} className='w-32'/>
    //   </div>

    //   </div>
    //   </div>
      
    // </div>
    <div className="relative bg-[#FFF5F5] w-full pb-52 pt-12 px-32">
      <div className='mt-8'>
      <div className="relative" >
      <img src={Subtract} alt="Placeholder" className="items-center w-full md:rotate-0 rotate-90  z-100" />

      <div className="flex justify-between  items-center t-0 absolute inset-0">
            {/* Flex items */}
      <div className="flex justify-between gap-4">
      <div>
      <img src={IplBg} className=' relative flex md:block hidden top-0 left-0  items-center object-cover inset-0'/>
      <img src={Ipl} className='absolute  mx-auto top-0 z-1'/>
      </div>
      <div className='flex flex-col gap-8 w-64 mt-4'>
         <p className='font-bold text-lg'>IPL Match: Group stage match between CSK and KKR</p>
       <div className='flex flex-col gap-4'>
           <p className='font-sm text-gray-700'>Chepauk Stadium, Victoria Hostel Road, Triplicane, Chennai, Tamil Nadu 600005, India</p>
           <p className='font-bold text-red-600'>19:00 PM | 08-April-2024</p>
           <p className='font-gray-700'>Quantity: 2</p>
           <p className='fold-md'>E Executive Lounge: 2 tickets</p>
         </div>
           <div className='flex justify-between'>
             <p className='text-green-500 font-bold'>Amount Paid:</p>
             <p className='text-md'>Rs. 1920</p>
           </div>
         </div> 

         <div className='flex flex-col gap-8 ml-24 mt-6'>
     <div className='flex flex-col gap-4'>
       <img src={Qr} className='w-32 h-32'/>
        <p>ZAASS25SDHGS27</p>
      </div>
     <div className='flex flex-col gap-4'>
       <p>Tickets Powered by</p>
       <img src={Greet} className='w-32'/>
     </div>
     </div>
        </div>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default Ticket;
