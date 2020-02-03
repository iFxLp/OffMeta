import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
export default class Landing extends Component {
    onSubmit = () => {
        this.props.history.push('/registration');
    }
    render() {
        return (
            <div className="landing">
                <h1>Start a fantasy league today</h1>
                <h6 style={{color: '#819091'}}>Create a free fantasy esports league in just 60 seconds</h6>
                <form onSubmit={this.onSubmit}>
                    <div className="get-started">
                    <input type="email" className="email-get-started" placeholder="Email"/>
                    <button type="submit" className="btn-get-started">Get Started</button>
                    </div>
                </form>
            </div>
        );
    }
}