import React, { Component } from 'react';
import Header from "./Header"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userLastName: "",
            userEmail: "",
            userLogin: "",
            userPass: ""
        }
      
        this.setInitialValue = this.setInitialValue.bind(this);
        this.sendToServer = this.sendToServer.bind(this);
    }

    setInitialValue(event){
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value);
    }
    
    sendToServer(e){
        e.preventDefault();
        let jsonString = JSON.stringify({
            name: this.state.userName,
            lastName: this.state.userLastName,
            login: this.state.userLogin,
            password: this.state.userPass,
            email: this.state.userEmail
        });
        console.log(jsonString);
        window.fetch("/user", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
              },
            body: jsonString,
         });
    }

    render() {
        return (

            <MuiThemeProvider>
            <div>
            <Header
                text="Register"
            />
            <TextField
                hintText="First Name"
                floatingLabelText="First Name"
                name="userName"
                onChange = {(event) => this.setInitialValue(event)}
            />
            <br/>
            <TextField
                type="text"
                hintText="Last Name"
                floatingLabelText="Last Name"
                name="userLastName"
                onChange = {(event) => this.setInitialValue(event)}
                />
            <br/>
            <TextField
                type="text"
                hintText="Email"
                floatingLabelText="Email"
                name="userEmail"
                onChange = {(event) => this.setInitialValue(event)}
                />
            <br/>
            <TextField
                type="text"
                hintText="Login"
                floatingLabelText="Login"
                name="userLogin"
                onChange = {(event) => this.setInitialValue(event)}
                />
            <br/>
            <TextField
                type="password"
                hintText="Password"
                floatingLabelText="Password"
                name="userPass"
                onChange = {(event) => this.setInitialValue(event)}
                />
            <br/>
            <input type="submit" className="button" value="Register" onClick={event=>this.sendToServer(event)}/>
            </div>
            </MuiThemeProvider>
        );
      }
    }
    
export default Register;