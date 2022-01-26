import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
// import {withRouter} from 'react-router-dom'


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor(props) {
    super(props)

    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    this.props.history.push('/Profile')
  }
formik = useFormik({})

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>


            <Button
            id='SuccessButton'
              color="primary"
              variant="contained"
              onClick={this.goHome} href="/" 
            >Create Profile</Button>
          </Dialog>
          {/* </Dialog> */}
        </>
        <div className="foo">
      <button onClick={this.goHome} />
    </div>
  
        
      </MuiThemeProvider>
    );
  }
  
  
}


export default Success;
