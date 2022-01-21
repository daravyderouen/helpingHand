import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Requests from './pages/Requests';
import About from './pages/About';
import Support from './pages/Support';
import Logo from './components/Logo'



const  App =() => {
  return (
    <div className="App">
       <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Profile} />
          <Route path='/register' component={Register} />
          <Route path='/request' component={Requests} />
          <Route path='/about' component={About} />
          <Route path='/support' component={Support} />
        </Switch>
      </Router>
    </>
    <Logo />
      
      {/* <UserForm /> */}
    </div>
  );
  
}

export default App;



