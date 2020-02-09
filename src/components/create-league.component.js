import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CreateLeague extends Component{
    render(){
        return(
            
            <div className="homePage">
                <div className="sideBar">
                    <ul className="sideBar-list">
                        <div className="firstSide">
                             <li><Link className="home" to={"/home"}>Home</Link></li>
                        </div>
                        <div className="secondSide">
                            <li><Link className="inbox" to={"/inbox"}>Inbox</Link></li>
                        </div>
                        <div className="thirdSide">
                            <li><Link className="league" to={"/create"}>League</Link></li>
                        </div>
                        <div className="fourthSide">
                            <li><Link className="profile" to={"/profile"}>Profile</Link></li>
                        </div>
                        <div className="fifthSide">
                            <li><Link className="more" to={"/more"}>...More</Link></li>
                        </div>
                    </ul>
                </div>
                <div className="clContainer">
                    <div className="clWrapper">
                        <p>Create a new league</p>
                        <p>Don't worry you all be to make changes later to all settings later</p>
                        <div classNameName="leagueName">
                            <p>League Name</p>
                        </div>
                        <div className="teams">
                            <p>League Size</p>
                        </div>
                        <div className="scoringFormat">
                            <p>Scoring Format</p>
                        </div>
                        <button type="submit" className="btn-createLeague">Finish</button>
                    </div>
                </div>

            </div>
        );
    }
}