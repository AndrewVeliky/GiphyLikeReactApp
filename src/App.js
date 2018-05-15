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
            emptyLogin: "d-none",
            emptyPass: "d-none",
            validLogin: "d-none",
            validPass: "d-none",
            logged: false, 
            testLogin: "andrewv",
            testPass: "andrewv"
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
            this.state.login === "" ? this.setState({emptyLogin: "warning"}) : this.setState({emptyLogin: "d-none"});
            this.state.pass === "" ? this.setState({emptyPass: "warning"}) : this.setState({emptyPass: "d-none"});
        } else if(this.state.login !== this.state.testLogin || this.state.pass !== this.state.testPass){
            event.preventDefault();
            this.state.login !== this.state.testLogin ? this.setState({validLogin: "warning", emptyLogin: "d-none"}) : this.setState({validLogin: "d-none", emptyLogin: "d-none"});
            this.state.pass !== this.state.testPass ? this.setState({validPass: "warning", emptyPass: "d-none"}) : this.setState({validPass: "d-none", emptyPass: "d-none"});
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
                 <span className={this.state.emptyLogin}>*Email required</span>
                 <span className={this.state.validLogin}>*Invalid login</span>
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   name="pass"
                   onChange = {(event) => this.setInitialValue(event)}
                   style={style}
                   />
                   <span className={this.state.emptyPass}>*Password required</span>
                   <span className={this.state.validPass}>*Invalid password</span>
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