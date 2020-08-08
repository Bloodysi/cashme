import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Balance from './components/balance/Balance';
import AddRecord from './components/addRecord/AddRecord';


function App() {
  return (
    <div className="App">
      
      <Header />
      
      <main>
        <section>
          <Balance />
          <AddRecord />
        </section>
      </main> 
      
      
    </div>
  );
}

export default App;
