import React from 'react';
import '../components/Home/Home.css';
import Logo from  '../images/Logo.jpg';

function Home() {
  return (
    <div className="home">
      <h1 className='homeH1'>Helping Hands</h1>
    
     <img src={Logo} id='homeLogo' alt='Logo'/>
       <br />
       
     <div>
      <h2 className='homeH2'> Everyday, someone is in need of your assistance. Sign up today or request for help.  </h2>
     </div>
    
      
    </div>
  
  );
}

export default Home;