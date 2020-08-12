import React, { useState, useContext } from 'react';
import './AddRecord.css';

import { context } from '../../context';

const AddRecord = ({ openRecord }) => {

  const [money, setMoney] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  const { records, setRecords } = useContext(context)

  const addRecord = (e) => {

    e.preventDefault()

    if(money === '' && category === '' && type ==='') {
      return null
    }
    else{
      setRecords([...records, {category, money, type}])
      setMoney('')
      setCategory('')
      setType('')
      openRecord(false)
    }
    
  }

  return (
    <div className='addRecord'>
      <form className='form-container'>
        <i className='far fa-times-circle addRecord-icon' onClick={()=> openRecord(false)} />
        <h2 className='form-title' >New Record</h2>

        <div className='form-control'>
          <label className='form-label' htmlFor="input">Money Amount</label>
          <input 
            className='form-input' 
            type='number' 
            name='money'
            value={money}
            onChange={(e)=> setMoney(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label className='form-label' htmlFor="select">Category</label>
          <select className='form-input' value={category} onChange={(e)=> setCategory(e.target.value)} name='category'>
            <option defaultValue='' className=''>...</option>
            <option>Food</option>
            <option>Work</option> 
            <option>Housing</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor="">Type</label>
          <div className='addRecord-types'>
            <button 
              className={`addRecord-btn green ${(type === 'Income') ? 'addRecord-btn-1' : ''}`} 
              type='button'
              onClick={()=> setType('Income')}>Income</button>
            <button 
              className={`addRecord-btn red ${(type === 'Expense') ? 'addRecord-btn-2' : ''}`} 
              type='button'
              onClick={()=> setType('Expense')}>Expense</button>
          </div>
        </div>        
      </form>

      
      <button className="addRecord__save" onClick={(e)=> addRecord(e)}>Save</button>
      
      
    </div>
    
  )
};

export default AddRecord;
