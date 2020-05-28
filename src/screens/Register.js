import React from "react";

import "./Register.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Register = () => {

    const login = (
        <span class="navbar-text">
        <button  
        class="btn btn-outline-danger btn-block button" >
        Login
        </button>
        </span>
      );

    return (
        <div className="register">
            <Header rightElement={login} />
            <h1>SIGN UP NOW</h1>
            <div className="register-form">
            <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputFname">First Name</label>
                    <input type="text" class="form-control" id="inputFname" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputLname">Last Name</label>
                    <input type="text" class="form-control" id="inputLname" placeholder="Last Name" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    <small id="emailHelpBlock" class="form-text text-muted">
                    Your email must be valid.
                    </small>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    <small id="passwordHelpBlock" class="form-text text-muted">
                    Your password must be atleast 6 characters long.
                    </small>
                    </div>
                </div>
                <div class="form-row">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>

                <div class="form-row">
                    <div class="form-group form-margin">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>Maharashtra</option>
                        <option>Gujarat</option>
                        <option>Rajasthan</option>
                        <option>Uttar Pradesh</option>
                        <option>Karnataka</option>
                        <option>Andhra Pradesh</option>
                        <option>West Bengal</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        I agree to the terms of service.
                    </label>
                    </div>
                </div>
                <div className="form-row form-margin">
                    <button type="submit" class="btn btn-outline-dark btn-block button" onClick={this.signup}>Sign in</button>
                </div>
            </div>
            <Footer className="footer" />
        </div>
    );
};

export default Register;