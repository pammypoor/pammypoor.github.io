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
            <div className="landing-intro mx-5 w-100">
                <TypeAnimation cursor={true} sequence={['Hello,', ,10000]}  wrapper="h6" repeat = {1}/>
                <div className="landing-intro-name my-2">
                    <h1 className="d-inline">I'm </h1>
                    <h1 className="gradient-text d-inline">Pamela Poor</h1>
                </div>
                <h4 className="my-3">Fullstack Developer</h4>
                <div className="landing-buttons">
                    <button type="submit" class="read-more" onClick={() => window.open("#about", "_self")}>Read More</button>
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
            <div className="landing-content d-flex flex-column h-100">
                <div className="p-2 w-100 align-items-center text-start">
                    {landingIntro}
                </div>
                <div className="p-2 w-100 ">
                    {landingPhoto}
                </div>
            </div>
        )


        return (
            <div className = "landing-container ">
                <div className=" d-none d-sm-block h-100 mx-5">
                    {landingContent}
                </div>
                <div className="d-block d-sm-none">
                    {landingContentMobile}
                </div>
            </div>
        )
    }
}

export default Landing;