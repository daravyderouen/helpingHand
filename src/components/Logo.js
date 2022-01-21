import React from 'react';
import Logo from '../images/Logo.jpg'; // Tell webpack this JS file uses this image

console.log(Logo); // /logo.84287d09.png

function showLogo() {
  // Import result is the URL of your image
  return <img src={Logo} alt="Logo" />;
}

export default showLogo;