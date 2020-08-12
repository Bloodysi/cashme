import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';
export const context = createContext();

export const  ContextProvider = (props) => {


  const [records, setRecords] = useState([])
  const [user, setUser] = useState(null)

  useEffect(()=> {
    fetchRecords()
  }, []);
  
  const fetchRecords = async () => {
    const { data } = await axios('api/records')
    if(data){
      setRecords(data.body)
    }
  }

  const postRecords = async (data) => {
    await axios('api/records', ({
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data
    }))
    fetchRecords()
  }

  console.log(records)

  return (
   <context.Provider value={{
     records,
     setRecords,
     user,
     setUser,
     postRecords
    }}>
     {props.children}
   </context.Provider> 
  )
}