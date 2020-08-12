import React, { useState } from 'react';
import './Home.css';

import Balance from '../balance/Balance';
import AddRecord from '../addRecord/AddRecord';

const Home = () => {

  const [openAddRecord, setOpenAddRecord] = useState(false)

  return (
    <div className='home'>
      <Balance openRecord={setOpenAddRecord} open={openAddRecord} />
      { openAddRecord && <AddRecord openRecord={setOpenAddRecord} /> }
    </div>
  )
};

export default Home;


