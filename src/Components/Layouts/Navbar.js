import React, {useState} from "react";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData"

import UserProfile from "./UserProfile";
import GnbIcon from "../icons/icon-gnb.svg";
import CloseIcon from "../icons/icon-close.svg";

import "../Layouts/Styles/Navbar.css";
import "../Layouts/Styles/UserProfile.css";

const Navbar = () => { // toggle the sidebar
    const [sidebar, setSidebar] = useState(false);

    // function to show the sidebar
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="navbar">
            <div className="menu-bars">
                <img src={GnbIcon}
                    alt="icon"
                    onClick={showSidebar}/>
            </div>
            <div className="profile">
                <UserProfile/>
            </div>
            <nav className={
                sidebar ? "nav-menu active" : "nav-menu"
            }>
                <ul className="nav-menu-items">

                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars"
                            onClick={showSidebar}>
                            <img src={CloseIcon}
                                alt="icon"/>
                        </Link>
                    </li>

                    <div className="nav-block">
                        <span className="nav-title">Explorer</span>
                        {
                        SidebarData.map((item, index) => {
                            return (

                                <li key={index}
                                    className="nav-text">
                                    <Link to={
                                            item.path
                                        }
                                        onClick={showSidebar}>
                                        <div className="indicator"></div>
                                        <span>{
                                            item.title
                                        }</span>
                                    </Link>
                                </li>

                            )
                        })
                    } </div>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;
