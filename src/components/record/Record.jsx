import React, { useContext, useState} from 'react';
import './Record.css';

import RecordCard from '../recordCard/RecordCard';
import { context } from '../../context';

const Record = () => {

    let [i, setI] = useState()

    const dateType = ['Days', 'Weeks', 'Months']
    
    const { records } = useContext(context)



    return( 
        <div className="record-container">

            <div className='section-title record-section'>

                <div className='record-section-container'>
                    <div>
                        <i className="fas fa-book" />
                        Records
                    </div>
                        <button 
                            className='record-btn' 
                            onClick={()=> setI(i++) }>{dateType[i]}</button>
                </div>
            </div>   

            <div className='record-card-container'>
                {
                    records.map((record, i) => (
                        <RecordCard key={i} record={record}/>
                    ))
                }
            </div>
                
        </div>
                 
                  
    )
}

export default Record;

