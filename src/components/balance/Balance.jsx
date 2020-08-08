import React from 'react';
import './Balance.css';

import CountUp from 'react-countup';

const num = 20000


const Balance = () => {
  return(  

    <div className="balance__container">
      <h1 className='balance-title'>Cash Balance</h1>
      <span className='balance-cash'> $<CountUp className='balance-shadow' end={num} separator=',' duration={2.5} /> </span>
      
      <div className='balance-button'>
        <h2>New Record </h2><i className="fas fa-plus balance-icon"></i>
      </div>
    </div>
    
  )
};

export default Balance;
