import React from 'react';
import './Balance.css';

import CountUp from 'react-countup';

const num = 20000


const Balance = ({ openRecord, open }) => {

  return(  

    <div className="balance__container">
      <p className='balance-title'>Cash Balance</p>
      <span className='balance-cash'> $<CountUp className='balance-number' end={num} separator=',' duration={2.5} /> </span>
      
      <div className={`balance-button ${open && 'none'}`} onClick={()=> openRecord(true)}>
        <h2>New Record </h2><i className="fas fa-plus balance-icon"></i>
      </div>
    </div>
    
  )
};

export default Balance;
