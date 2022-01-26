import React from "react";
import "../Home/Home.css";
// import Login from '../components/LandingPage/Login';
// import Logo from "./Logo.jpg";
// import About from "../About/About";
// import Login from "../LandingPage/Login";
// import Register from '../Register/Register';

function Home() {
  return (
    <div className="home">
      <div class="container">
    <div class="background-img">
      <div class="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
          <h2>Welcome to Helping Hands! </h2>
          <p>Everyday someone could use your help or you may be in need of some assistance. Become a volunteer today or post a request and receive some help!</p>
        </div>
        
      </div>
    </div>
  </div>
      {/* <h1 className="homeH1">Helping Hands</h1>

      <img src={Logo} id="homeLogo" alt="Logo" />
      <br /> */}

      {/* <About /> */}
      {/* <h2 className='homeH2'> Everyday, someone is in need of your assistance. Sign up today or request for help.  </h2> */}
      
    </div>
  );
}

export default Home;
