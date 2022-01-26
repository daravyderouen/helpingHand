import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
  state = {
    step: 1,
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    volunteer: '',
    recipient: '',
    publicPost: '',
    privatePost: '',
    dateOfRequest: '',
    specialRequestOrAccommodations: ''
  };
  
 
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    
    const { step } = this.state;
    const {  userName, firstName, lastName, email, address, city, volunteer, recipient, publicPost, privatePost, dateOfRequest, specialRequestOrAccommodations } = this.state;
    const values = {  userName, firstName, lastName, email, address, city, volunteer, recipient, publicPost, privatePost, dateOfRequest, specialRequestOrAccommodations};

    switch (step) {
      case 1:
        return (
          
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success 
        nextStep={this.nextStep}/>;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;