import React, { Component } from 'react';
       import Success from '../components/Form/Success';

       class FormData extends component {
             constructor(props) {
             super(props);
                  this.state = {
                  username: '',
                  password: ' ',
                  name: ""
                  };
                    this.onChange = this.onChange.bind(this);
                    this.onSubmit = this.onSubmit.bind(this);
                  }
                    // Let's 1st make a onChane function and get the form data 
                   onChange(e) {
                     this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
                  }

                // Let's make an onSubmit function
                  onSubmit(e) {
                    e.preventDefault();  // Here we prevent the default browser behavior
                    this.setState({isSubmitted: true}); // Let's set the new 'submitted state to TRUE

               // Gathering data in order to pass it to the <Results /> component

                    const formData = {
                      name: this.state.name,
                      age: this.state.age
                    };

                    this.props.makeResultsData(formData);  // Passing the data down as props
                  }

              // Let's render the necessary data including the results component 

           render() {
              return (

          // Little bit of destructuring
         // This is equal to const submitted = this.state.submitted
          { submitted } = this.state;  


        <div className="container">
          <form onSubmit={this.onSubmit}>
                <label>
                      Name:
                      placeholder="Enter your name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                </label>
                <label>
                      Age:
                      placeholder="Enter your age"
                      name="age"
                      value={this.state.age}
                      onChange={this.onChange}
               </label>

        // Let's finally SUBMIT our form and change the states 'submitted' value to TRUE

               <input type="submit" value="Submit" />

         </form>

// With conditional rendering ,we can now display our <Results /> component, like this

  {this.state.isSubmitted && <Results/>}  // So, if submitted = true, render the Results component

        </div>
            );
          }
        }

export default Results;