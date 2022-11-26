import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";

import "./Home.css";





class Home extends React.PureComponent {
    render() {
        return (
            <div className = "home-wrapper">
                <div className="nav-bar-wrapper">
                    <NavBar/>
                </div>
            </div>
        )
    }
}

export default Home;