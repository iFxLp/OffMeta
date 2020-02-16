import React, {Component} from "react";
import { Link } from "react-router-dom";


export default class Profile extends Component{
    render(){
        return(
            <div className ="homePage">
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

            <div className="profile-wrapper">
            <div className="profile-inner">
                <form>
                    <div className="profile-inner-bar">
                        <div className="profile-inner-header">
                            <h3 className="profile-title">Profile</h3>
                        </div>
                        <div className="edit-profile">
                            <button className="btn-edit-profile">Edit Profile</button>
                        </div>     
                    </div>             
                    <div className="profile-picture">
                    </div>
                    <div className="profile-control">
                        <input type="email" className="profile-form1" placeholder="John Doe" />
                        <input type="email" className="profile-form2" placeholder="jondoe@rushb.com" />
                    </div>
                    <button type="submit" className="save">Save</button>
                    <button type="submit" className="logoff">Logoff</button>
                    </form>
            </div>
        </div>
        </div>
        );
    }
}
