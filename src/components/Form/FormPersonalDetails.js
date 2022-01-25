import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

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
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Type Volunteer If You Are Assisting"
              label="Volunteer"
              onChange={handleChange('volunteer')}
              defaultValue={values.volunteer}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Type Recipient If Entering a Request"
              label="Recipient"
              onChange={handleChange('recipient')}
              defaultValue={values.recipient}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Public Post Request"
              label="Public Post"
              onChange={handleChange('publicPost')}
              defaultValue={values.publicPost}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Private Post Request"
              label="Private Post"
              onChange={handleChange('privatePost')}
              defaultValue={values.privatePost}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
            // FIND A WAY TO INCLUDE AN OPTION TO PUT DATES IN

              placeholder="Enter Your Date of Request i.e. 02/14/2022"
              label="Date of Request"
              onChange={handleChange('dateOfRequest')}
              defaultValue={values.dateOfRequest}
              margin="normal"
              fullWidth
            />
            

            <br />
              <TextField
              placeholder="Enter Your Special Request/Accommodations"
              label="Special Request/Accommodations"
              onChange={handleChange('specialRequestOrAccommodations')}
              defaultValue={values.specialRequestOrAccommodations}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
            id="FormPersonalButton"
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
            id="FormPersonalButton"
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

export default FormPersonalDetails;