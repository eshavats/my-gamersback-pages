import React from "react";
import "./Login.css";
import Header from "../components/Header";
import validator from "validator";
import youtube from "./images/youtube.png"
import instagram from "./images/instagram.png"
import discord from "./images/discord.png"

class Login extends React.Component
{
    state = { email: "", password: "" };

  validateForm = () => {
    return validator.isEmail(this.state.email) && this.state.password.length > 6;
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  register = (
    <>
    <span class="navbar-text icons">
    <div className="form-inline">
        <div className="form-group social-icon">
        <a href="https://www.instagram.com/gamersbackglobal/"><img src={instagram} id="discord" alt="logo"/></a>
        </div>
        <div className="form-group social-icon">
        <a href="https://www.youtube.com/channel/UCibcdFoWrXPn_a-h-K_fvaQ"><img src={youtube} id="discord" alt="logo"/></a>
        </div>
        <div className="form-group social-icon">
        <a><img src={discord} id="discord" alt="logo"/></a>
        </div>
      </div>
    </span>
    <span className="navbar-text">
    <button  
    className="btn btn-outline-danger btn-block button" >
    Register
    </button>
    </span>
    </>
  );

  render()
  {
    return (
        <div>
            <Header 
            leftElement="LOGIN"
            rightElement={this.register} 
            />
            <div className="Login">
            <div className="login-form">
            <h1 className="login-heading">Welcome back!</h1>
            <p>We're happy to serve you again!</p>
            <div className="form">
                <div class="form-group">
                    <label className="login-label" for="inputEmail">Email address</label>
                    <input 
                    type="email" 
                    class="form-control" 
                    id="inputEmail" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"  
                    autoComplete="off"
                    value = {this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    />
                    <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label className="login-label" for="inputPassword">Password</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="inputPassword" 
                    placeholder="Password" 
                    value = {this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                    />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="check1" />
                    <label className="login-label" class="form-check-label" for="check1">I agree to the terms of service.</label>
                </div>    
                <button 
                type="submit" 
                class="btn btn-dark btn-block button" 
                disabled={!this.validateForm()}>
                 Login
                </button>
            </div>
            </div>
        </div>
        </div>

      );
  }
}

export default Login;