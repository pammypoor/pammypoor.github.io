import React from "react";
import { TypeAnimation } from "react-type-animation";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import headshot from '../../assets/headshot.PNG';

import "./landing.css";

class Landing extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {

        const landingIntro = (
            <div className="landing-intro d-flex justify-content-center px-5">
                <div className="d-flex flex-column">
                    <span className="fs-2 gradient-text">Pamela Poor</span>
                    <span className="fs-6 py-2">Fullstack Developer</span>
                    <div className="landing-buttons">
                        <button type="submit" class="read-more" onClick={() => window.open("#about", "_self")}><span>Read More</span></button>
                    </div>
                </div>
            </div>
        )

        const landingPhoto = (
            <div className="w-100">
                <img src={headshot} className="img-fluid w-75 rounded"/>
                <div className="d-block d-sm-none">
                    <ul class = "icons">
                    <IconContext.Provider value={{ color: "#283618", size: "2em"}}>
                            <li><a href = "https://github.com/pammypoor" target="_blank"><FaGithub/></a></li>
                            <li><a href = "https://www.linkedin.com/in/pammypoor/" target="_blank"><FaLinkedin/></a></li>
                    </IconContext.Provider>
                    </ul>
                </div>
                
            </div>
        )


        const landingContent = (
            <div className="landing-content d-flex h-100 ">
                <div className="p-2 w-100 h-100 d-flex align-items-center text-start mx-5">
                    {landingIntro}
                </div>
                <div className="p-2  w-100 h-100 d-flex align-items-center justify-content-center">
                    {landingPhoto}
                </div>
            </div>
        )

        const landingContentMobile = (
            <div className="landing-content d-flex flex-column justify-content-center h-100">
                <div className="align-items-center text-start py-3">
                    {landingIntro}
                </div>
                <div className="py-3">
                    {landingPhoto}
                </div>
            </div>
        )


        return (
            <div className = "landing-container h-100">
                <div className=" d-none d-sm-block h-100 mx-5">
                    {landingContent}
                </div>
                <div className="d-block d-sm-none h-100">
                    {landingContentMobile}
                </div>
            </div>
        )
    }
}

export default Landing;