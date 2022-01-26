import React from 'react';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/LandingComponent/Home/Home';
import Profile from './pages/Profile';
import Register from './components/LandingComponent/Register/Register';
import Requests from './pages/Requests';
import About from './components/LandingComponent/About/About';
import Support from './pages/Support';
// import Login from './components/LandingComponent/Login';
// import {Routes } from 'react-router';
// import {useState, useEffect} from 'react'
// import Dashboard from './components/Dashboard';




const  App =() => {
 

  return (
    <div className="App">
    <>
   
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Register' component={Register} />
           <Route path='/Requests' component={Requests} />
          <Route path='/About' component={About} />
          <Route path='/Support' component={Support} /> 
        </Switch>
      </Router>
      
    </>
      {/* </Routes> */}
    
      {/* <UserForm /> */}
    </div>
    
  );
  
}

export default App;