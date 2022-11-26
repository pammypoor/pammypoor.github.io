import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';

import "./NavBar.css";

class NavBar extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="navbar-wrapper">
                <nav className = "navbar">
                    <Link to="/" className = "nav-logo" onClick={() => this.setState({open: false})}>
                        Pamela Poor
                    </Link>
                    <div onClick={() => this.setState({open: !this.state.open})} className="nav-icon">
                        {this.state.open ? <FiX/> : <FiMenu/>}
                    </div>
                    <ul className = { this.state.open ? 'nav-links active': 'nav-links'}>
                        <li className="nav-item">
                            <a to="/" className="nav-link" onClick={() => this.setState({open: false})}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={() => this.setState({open:false})}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" onClick={() => this.setState({open:false})}>
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={() => this.setState({open:false})}>
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;