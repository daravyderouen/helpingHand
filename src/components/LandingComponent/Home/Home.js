import React from "react";
import "../Home/Home.css";
// import Login from '../components/LandingPage/Login';
import Logo from "./Logo.jpg";
// import About from "../About/About";
// import Login from "../LandingPage/Login";
// import Register from '../Register/Register';

function Home(props) {
  return (
    <div className="home">
      <h1 className="homeH1">Helping Hands</h1>

      <img src={Logo} id="homeLogo" alt="Logo" />
      <br />

      {/* <About /> */}
      {/* <h2 className='homeH2'> Everyday, someone is in need of your assistance. Sign up today or request for help.  </h2> */}
      
    </div>
  );
}

export default Home;
