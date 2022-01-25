import React from 'react';
import '../components/Profile/Profile.css'
import Success from '../components/Form/Success';
// import Calendar from '../components/Calendar'

function Profile() {
  return (
    <div className='profile'>
      <h1 className='profileH1'>Profile</h1>
      < Success />
     
      {/* <Calendar /> */}
    </div>
  );
  
}

export default Profile;