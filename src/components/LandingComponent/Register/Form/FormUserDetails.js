import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  constructor(props) {
    super(props)

    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    this.props.history.push('/Home')
  }

  render() {
    
    const { values, handleChange } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your Username"
              label="Username"
              onChange={handleChange('userName')}
              defaultValue={values.userName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Name"
              label="Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            {/* <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            /> */}
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Password"
              label="Password"
              onChange={handleChange('password')}
              defaultValue={values.password}
              margin="normal"
              fullWidth
            />
             <br />
             <TextField
              placeholder="Confirm Your Password"
              label="Confirm Password"
              onChange={handleChange('confirmPassword')}
              defaultValue={values.confirmPassword}
              margin="normal"
              fullWidth
            />
             <br />
            <Button
              color="teal"
              variant="contained"
              onClick={this.goHome} href="/" 
            >Exit</Button>
            <br/>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;