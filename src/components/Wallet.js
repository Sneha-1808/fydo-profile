import React from 'react';
import Robot from '../images/Robot.png'

const Wallet = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center px-6 py-12'>
    <img src={Robot}/>
    <p>Being  Fydoian has its own perks,</p>
<p className='text-center'>You will soon be able to get Guaranteed Cashback on every event ticket booking :)</p>

    </div>
  );
};

export default Wallet;