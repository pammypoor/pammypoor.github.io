import React from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

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
                <Navbar collapseOnSelect expand="lg"  variant = "dark" className="nav-bar">
                    <Navbar.Brand href="#home" className="logo mx-3">
                        Pamela Poor
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-bar-toggle">
                        <div onClick={() => this.setState({open: !this.state.open})}>
                            {this.state.open ? <FiX/> : <FiMenu/>}
                        </div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about" className="me-auto mx-4 nav-item">ABOUT</Nav.Link>
                            <Nav.Link href="#skills" className="me-auto mx-4 nav-item">SKILLS</Nav.Link>
                            <Nav.Link href="#projects" className="me-auto mx-4 nav-item">PROJECTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar> 
            </div>
        )
    }
}

export default NavBar;