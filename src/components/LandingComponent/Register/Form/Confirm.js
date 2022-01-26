import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
 
  render() {
    const {
      values: { userName, firstName, lastName, email, address, city, volunteer, recipient, publicPost, privatePost, dateOfRequest, specialRequestOrAccommodations }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
              <ListItemText primary="First Name" secondary={userName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Volunteer" secondary={volunteer} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Recipient" secondary={recipient} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Public Post Request" secondary={publicPost} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Private Post Request" secondary={privatePost} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date Of Request" secondary={dateOfRequest} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Special Request of Accommodations" secondary={specialRequestOrAccommodations} />
              </ListItem>
            </List>
            <br />

            <Button
            id='ConfirmButton'
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
            id='ConfirmButton'
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;