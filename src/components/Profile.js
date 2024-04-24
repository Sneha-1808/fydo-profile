import React from 'react';
import Profilepic from '../images/Profile.png'
import SignOut from '../images/Union.png'


const Profile = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-end items-center py-14 gap-4">
      
      <div className="flex md:flex-row flex-col md:items-end items-center justify-center md:gap-6 gap-2 align-bottom">
        
        <img src={Profilepic} alt="Profile" className="object-cover md:w-40 w-30 w-24 " />
        <div className='flex flex-col md:items-start items-center md:gap-2 gap-0 md:pb-4 pb-1'>
            <p className='font-semibold md:text-3xl text-lg'>User Name</p>
            <p className=' md:text-2xl text-md'>username@gmail.com</p>
        </div>
      </div>

      
      <button className="secBtn md:mr-24 md:block hidden">
        Sign Out
      </button>

      <div className='flex gap-2 cursor-pointer md:hidden block items-center'>
        <p className='text-red-700'>Sign Out</p>
        <img src={SignOut} className='w-4 h-4'/>
      </div>
    </div>
  );
};

export default Profile;
