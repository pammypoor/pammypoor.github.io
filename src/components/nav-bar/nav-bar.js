import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiMenu, FiX } from 'react-icons/fi';

import "./nav-bar.css";

class NavBar extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="navbar-container">
                <nav className = "navbar">
                    <div className="d-flex bg-light mb-3">
                        <div className="p-2">Flex item</div>
                        <div className="p-2">Flex item</div>
                        <div className="ms-auto p-2">Flex item</div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;