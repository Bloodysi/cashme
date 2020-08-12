import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Settings from './components/settingsScreen/Settigns';
import Record from './components/record/Record';
import Login from './components/login/Login';
import Register from './components/register/register';




function App() {  

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/record' component={Record} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />

      </Router>   
      
    </div>
  );
}

export default App;
