import React from "react";

import "./Registration.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Registration extends React.Component
{

    account = (
        <ul class="nav navbar-nav navbar-right">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fas fa-user"></i> Hello, Esha<span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#">Account Info</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#" onClick={this.logout}><i class="fas fa-sign-out-alt"  ></i> LogOut</a></li>
        </ul>
        </li>
    </ul>
    );


    render()
    {
        return (
            <div id="registration">
                <Header rightElement={this.account} />
                <h1 className="registration-head">REGISTRATION INFORMATION</h1>
                <div className="register-form">
                <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputFname">First Name</label>
                        <input type="text" class="form-control registration-form" id="inputFname" placeholder="First Name" />
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputLname">Last Name</label>
                        <input type="text" class="form-control registration-form" id="inputLname" placeholder="Last Name" />
                        </div>
                    </div>

                    <div className="form-row">
                    <label for="inputSquad">Squad Name and Logo</label>
                        <div class="input-group mb-3">
                        <input type="text" id="inputSquad" class="form-control registration-form" placeholder="Squad Name" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary file" type="submit">
                            <input type="file" />  
                            </button>
                        </div>
                        </div>
                    </div>

                    <div className="form-row">
                    <label for="">Squad Members Name and Id</label>
                        <div class="input-group mb-3">
                        <input type="text" id="" class="form-control registration-form" placeholder="Team Member Name" />
                        <div class="input-group-append">
                        <input type="text" id="" class="form-control registration-form" placeholder="Game Id"/>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="text" id="" class="form-control registration-form" placeholder="Team Member Name" />
                        <div class="input-group-append">
                        <input type="text" id="" class="form-control registration-form" placeholder="Game Id"/>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="text" id="" class="form-control registration-form" placeholder="Team Member Name" />
                        <div class="input-group-append">
                        <input type="text" id="" class="form-control registration-form" placeholder="Game Id"/>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="text" id="" class="form-control registration-form" placeholder="Team Member Name" />
                        <div class="input-group-append">
                        <input type="text" id="" class="form-control registration-form" placeholder="Game Id"/>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="text" id="" class="form-control registration-form" placeholder="Team Member Name" />
                        <div class="input-group-append">
                        <input type="text" id="" class="form-control registration-form" placeholder="Game Id"/>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="text" id="" class="form-control registration-form" placeholder="Substitute Member Name" />
                        <div class="input-group-append">
                        <input type="text" id="" class="form-control registration-form" placeholder="Game Id"/>
                        </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <label for="inputEmail">Email Id</label>
                        <input type="email" class="form-control registration-form" id="inputEmail" placeholder="abc@something.com" />
                    </div>

                    <div class="form-row form-margin">
                        <label for="inputPhone">Phone Number</label>
                        <input type="tel" class="form-control registration-form" id="inputPhone" />
                    </div>

                    <div class="form-row form-margin">
                        <label for="inputPhoneN">Phone Number (for notification)</label>
                        <input type="tel" class="form-control registration-form" id="inputPhoneN" />
                    </div>

                    <div class="form-row form-margin">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            I agree to the terms of service.
                        </label>
                        </div>
                    </div>
                    <div className="form-row form-margin">
                        <button type="submit" class="btn btn-outline-dark btn-block button">Pay Now</button>
                    </div>
                </div>
                <Footer className="footer" />
            </div>
        );
    }

}

export default Registration; 