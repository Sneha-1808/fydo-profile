import React from 'react';
import ProfilePic from '..//images/Profile1.png'

const EditProfile= () => {
  return (
    <div className="flex md:flex-row flex-col-reverse md:px-36 px:6 items-center">
      {/* Left side: Form */}
      <button className="block md:hidden bg-red-500  text-white font-bold py-2 px-8 rounded mb-8">Update Profile</button>
      <div className="md:w-1/2 w-full p-4 md:my-8 mb-8 ">
        <form className="md:space-y-12 space-y-8">
          <div>
            <label htmlFor="username" className="block font-bold">Username</label>
            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-2xl px-4 py-4 mt-2" placeholder='Name of user' />
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="block font-bold">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" className="w-full border border-gray-300 rounded-2xl px-4 py-4 mt-2" placeholder='DD/MM/YYYY' />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-2xl px-4 py-4 mt-2" placeholder='useremailid@gmail.com' />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block font-bold">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="w-full border border-gray-300 rounded-2xl px-4 py-4 mt-2" placeholder='+91XXXXXXXXXX' />
          </div>
        </form>
      </div>

      {/* Right side: Image and Buttons */}
      <div className="md:w-1/2 w-full h-full p-4 flex flex-col items-center md:justify-between py-8 gap-32">
        
        <div className='flex flex-col items-center justify-end gap-4'>
        <img src={ProfilePic} alt="User" className="md:w-40 md:h-40 w-28 h-28 md:mb-4" />


<button className="secBtn ">Upload Image</button>
<button className="secBtn">Remove Image</button>


        </div>
        
        <button className="md:block hidden bg-red-500 text-white font-bold py-2 px-8 rounded">Update Profile</button>
      </div>
    </div>
  );
};

export default EditProfile;
