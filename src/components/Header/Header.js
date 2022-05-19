import React from "react";

import "./Header.css";

import NavBar from "../NavBar/NavBar";

class Header extends React.PureComponent {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="header-wrapper">
                {<NavBar/>}
            </div>
        )
    }
}

export default Header;