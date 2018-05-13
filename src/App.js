import React, { Component } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom'
import Main from './Main';
import './App.css';
import Register from './Register';


//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            pass: "",
            validLogin: "d-none",
            validPass: "d-none"
        }
      
        this.setInitialValue = this.setInitialValue.bind(this);
        this.validateLoginForm = this.validateLoginForm.bind(this);
    }

    setInitialValue(event){
        this.setState({
            [event.target.name]: event.target.value,
        });
      }

    validateLoginForm(event){
        if(this.state.login === "" || this.state.pass === ""){
            event.preventDefault(); 
        }

        this.state.login === "" ? this.setState({validLogin: "warning"}) : this.setState({validLogin: "d-none"});
        this.state.pass === "" ? this.setState({validPass: "warning"}) : this.setState({validPass: "d-none"});
    }
  
    render() {
        return (
            <div className="login-page">
            <MuiThemeProvider>
              <div>
              <AppBar
                 title="Login"
               />
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 name="login"
                 onChange = {(event) => this.setInitialValue(event)}
                 />
                 <span className={this.state.validLogin}>*Email required</span>
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   name="pass"
                   onChange = {(event) => this.setInitialValue(event)}
                   />
                   <span className={this.state.validPass}>*Password required</span>
                 <br/>
                 <Link to="/index" className="button" onClick={(event) => this.validateLoginForm(event)}>LOGIN</Link>
             </div>
             </MuiThemeProvider>
             <Register />
          </div>
        );
      }
    }
    
export default App;