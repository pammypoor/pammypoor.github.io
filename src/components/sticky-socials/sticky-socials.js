import React from "react";
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import "./sticky-socials.css";

class StickySocials extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="sticky-socials-container d-none d-sm-block">
                <ul className="sticky-socials-links ">
                    <li className="sticky-socials-item my-3">
                        <a href="https://github.com/pammypoor" target="_blank" className="sticky-socials-link ">
                            <FaGithub/>
                        </a>
                    </li>
                    <li className="sticky-socials-item my-3">
                        <a href="https://www.linkedin.com/in/pammypoor/" target="_blank" className="sticky-socials-link">
                            <FaLinkedin/>
                        </a>
                    </li>
                    <li className="sticky-socials-item my-3">
                        <a href="#about" className="sticky-socials-link">
                            <FaInstagram/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default StickySocials;