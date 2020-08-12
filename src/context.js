import React, { createContext, useState } from 'react';

export const context = createContext()

export const  ContextProvider = (props) => {

  
    const d = new Date()
    const month = d.getMonth()
    const day = d.getUTCDate()

    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'jule', 'august', 'sepetember', 'october', 'november']


  const [records, setRecords] = useState([])
  const [user, setUser] = useState(null)


  return (
   <context.Provider value={{
     records,
     setRecords,
     user,
     setUser
    }}>
     {props.children}
   </context.Provider> 
  )
}