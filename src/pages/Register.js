import React from 'react';
import {UserForm} from '../components/Form/UserForm'
import '../components/Register/Register.css'




function Register() {
  return (
    <div className='register'>
    <h1 className='registerH1'> Register </h1>
    <br />
    <UserForm />
    </div>
  );
  
}

export default Register;