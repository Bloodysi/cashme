import React, { useState } from 'react';
import './AddRecord.css';

const AddRecord = () => {

  const [money, setMoney] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  return (
    <div className='addRecord'>
      <form className='form-container'>
        <i className='far fa-times-circle addRecord-icon'></i>
        <h2 className='form-title' >New Record</h2>

        <div className='form-control'>
          <label className='form-label' htmlFor="">Money Amount</label>
          <input 
            className='form-input' 
            type='number' 
            name='money'
            value={money}
            onChange={(e)=> setMoney(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label className='form-label' htmlFor="">Category</label>
          <select className='form-input' name='category'>
            <option></option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor="">Type</label>
          <div className='addRecord-types'>
            <button className='addRecord-btn green' type='button'>Income</button>
            <button className='addRecord-btn red' type='button'>Expense</button>
          </div>
        </div>        
      </form>

      
      <button className="addRecord__save">Save</button>
      
      
    </div>
    
  )
};

export default AddRecord;
