import React from 'react';
import '../About/About.css'

function About() {
  return (
    <div className='about'>
      <h1 className="aboutH1">About Us</h1>
        <h2 className='aboutH2'>Welcome to Helping Hands!</h2>
        <div className='aboutFlex-container' >
          <div className='aboutFlexChild'>
        <p className='aboutP1'>
          Helping Hands is a great way to give back to the family members or the community or put in a request for assistance, whether it's a small request or big task. 
        </p>
        
        </div>
          <div className='aboutFlexChild2'>
        <p className='aboutP2'>
          This application was developed when our founder was sick with Covid and was fortunate to have family members drop off food and do the necessities to keep the ball rolling. However, she wondered about the other patients out there that doesn't have anyone. How would they get help. Thus her and her husband came up with this idea and developed it. 
        </p>
        </div>
        </div>
    </div>
    
    
  );
}

export default About;