import React from 'react';
import '../components/Profile/Profile.css'
// import Register from '../pages/Register';
// import Calendar from '../components/Calendar'


function Profile(props) {
  return (
    <div className='profile'>
      <h1 className='profileH1'>Welcome *Add Username*</h1>
      <button onClick={props.onClick}>
      Login
    </button>
      {/* <Calendar /> */}
    </div>
  );
  
}

export default Profile;