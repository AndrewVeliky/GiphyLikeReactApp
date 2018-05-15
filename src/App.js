import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Register from './Register';
import Header from './Header';


//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            pass: "",
            validLogin: "d-none",
            validPass: "d-none",
            logged: false
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
            this.state.login === "" ? this.setState({validLogin: "warning"}) : this.setState({validLogin: "d-none"});
            this.state.pass === "" ? this.setState({validPass: "warning"}) : this.setState({validPass: "d-none"});
        }

        this.setState({logged: true})
    }
  
    render() {
        const style = {
            width: `${100}%`
        }
        return (
            <div className="login-page">
            <MuiThemeProvider>
              <div>
              <Header
                 text="Login"
               />
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 name="login"
                 onChange = {(event) => this.setInitialValue(event)}
                 style={style}
                 />
                 <span className={this.state.validLogin}>*Email required</span>
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   name="pass"
                   onChange = {(event) => this.setInitialValue(event)}
                   style={style}
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