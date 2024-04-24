import React, { useState } from 'react';
import EditProfile from './EditProfile';
import Ticket from './Tickets';
import Wallet from './Wallet';

const Details = () => {
  const [selectedButton, setSelectedButton] = useState("EditProfile");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className='flex flex-col s'>
<div className="flex items-start md:gap-12 gap-6 md:text-2xl text-lg font-semibold border-b-2 shadow-b-md pt-2 md:px-32  px-8 text-gray-500">
      <button
        className={` ${selectedButton === "EditProfile" ? 'border-b-2 border-red-500 pb-2 text-black' : ''}`}
        onClick={() => handleButtonClick("EditProfile")}
      >
        Edit Profile
      </button>
      <button
        className={` ${selectedButton === "Tickets" ? 'border-b-2 border-red-500 pb-2 text-black' : ''}`}
        onClick={() => handleButtonClick("Tickets")}
      >
        Tickets
      </button>
      <button
        className={` ${selectedButton === "Wallet" ? 'border-b-2 border-red-500 pb-2 text-black' : ''}`}
        onClick={() => handleButtonClick("Wallet")}
      >
        Wallet
      </button>
      </div>
      <div>
      {selectedButton=="EditProfile" && 
        <EditProfile/>}
        {selectedButton=="Tickets" && 
        <Ticket/>}
        {selectedButton=="Wallet" && 
        <Wallet/>}
      </div>
      
    
    
    </div>
  );
};

export default Details;
