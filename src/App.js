
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




function App ( { register,  requests}) {
  
  return (
    <div className="App">
    <>
   
      <Router>
        <Navigation />
        <></>
        <Switch>
          <Route exact path={"/"}  component={Home} />
          <Route exact path=
          {'/profile'}render={(props) =><Profile />} />
          <Route exact path={'/register' }render={props=>
          <Register requests={register} {...props}/>}  />
           <Route exact path={'/requests'}render={props=> <Requests requests={requests} {...props}/>}  />
          <Route exact path={'/about'} render={(props)=> <About />} />
          <Route exact path={'/support' }render={props => <Support />} />
        </Switch>
      </Router>
      
    </>
      {/* </Routes> */}
    
      {/* <UserForm /> */}
    </div>
    
  );
  
}


export default App;