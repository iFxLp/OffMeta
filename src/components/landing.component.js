import React, { Component } from "react";

export default class  extends Component {
    render() {
        return (
            <div className="landing">
                <h1>Start a fantasy league today</h1>
                <h6 style={{color: '#819091'}}>Create a free fantasy esports league in just 60 seconds</h6>
                <form>
                    <div className="get-started">
                    <input type="email" className="email-get-started" placeholder="Email"/>
                    <button type="submit" className="btn-get-started">GET STARTED</button>
                    </div>
                </form>
            </div>
        );
    }
}