import React from 'react';
import {UserForm} from '../Register/Form/UserForm'
import './Register.css'
// import {useFormik} from 'formik'
// import axios from 'axios';




function Register() {
  return (
    <div className='register'>
    <h1 className='registerH1'> Register </h1>
    <br />
    <UserForm />
    </div>
  );
  
// }

// function Register() {
//   const initialValues = {
//     username: "",
//     name: "",
//     password: "",
//     confirmPassword: "",

//   }
//   const onSubmit = (values) => {
//     axios.post('http://localhost:3000/register', values)
//     .then((res) => {
//       console.log(res.data)
//       localStorage.setItem('username', res.data[0][0].username)
//       localStorage.setItem('id', res.data[0][0].id)
//       localStorage.setItem('name', res.data[0][0].name)
//     })
//     .catch((err) => console.log(err.response.data))
//   }
//   const validate = (values) => {
//     const errors = {}
//     if(!values.username) {
//       errors.username = "Username Required"
//     }
//     if(!values.password) {
//       errors.password = "Password Required"
//     } else if(values.password.length < 8) {
//       errors.password = "Password must be longer than 8 Characters."
//     }
//     if(!values.name) {
//       errors.name = "You gotta have a name!!"
//     }
//     if(!values.confirmPassword) {
//       errors.confirmPassword = "Please Confirm Password"
//     } else if(values.password !== values.confirmPassword) {
//       errors.confirmPassword = "Password must Match"
//     }
//     return errors
//   }
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate
//   })

//   return <div className='register'>
//     <h2 className='registerH1'>Register</h2>
//     <form onSubmit={formik.handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         onChange={formik.handleChange}
//         value={formik.values.name}
//         placeholder='Name'
//         />
//       <input
//         type="text"
//         name="username"
//         onChange={formik.handleChange}
//         value={formik.values.username}
//         placeholder='Username'
//         />
//       <input
//         type="password"
//         name="password"
//         onChange={formik.handleChange}
//         value={formik.values.password}
//         placeholder='Password'
//         />
//       <input
//         type="password"
//         name="confirmPassword"
//         onChange={formik.handleChange}
//         value={formik.values.confirmPassword}
//         placeholder='Confirm Password'
//         />
//         <button type='submit' onClick={!formik.isValid}>Submit</button>
//     </form>
//     <div>
//       {formik.errors.username ? <div>{formik.errors.username}</div> : null}
//       {formik.errors.name ? <div>{formik.errors.name}</div> : null}
//       {formik.errors.password ? <div>{formik.errors.password}</div> : null}
//       {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
//     </div>
  // </div>;
}

export default Register;




