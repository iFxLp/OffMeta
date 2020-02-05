import React, { Component } from "react";

export default class Registration extends Component {
    render() {
        return (
            <div className="auth-wrapper">
             <div className="auth-inner">
                <form>
                    <h3>Create Your Account</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">login?</a>
                    </p>
                </form>
                </div>
            </div>
        );
    }
}