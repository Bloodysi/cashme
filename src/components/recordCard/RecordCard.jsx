import React from 'react'
import './RecordCard.css';

const RecordCard = ({ record }) => {

  return (
    <div className='recordCard-container'>
      <span className='recordCard-date'>{record.time}</span>

      <div className="recordCard">
        
        <div className={`record-item ${record.type === 'Income' ? 'green' : 'red'}`}>
          <p className="record-title">{record.category}</p>
          <p className="record-money">{record.money}</p>
        </div>

      </div>

    </div>
  )
}

export default RecordCard
