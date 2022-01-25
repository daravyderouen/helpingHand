import React from 'react';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Requests from './pages/Requests';
import About from './pages/About';
import Support from './pages/Support';




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
    
      
      {/* <UserForm /> */}
    </div>
  );
  
}

export default App;