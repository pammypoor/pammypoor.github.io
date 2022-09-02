import React from "react";
import TypeAnimation from 'react-type-animation';
import {FaGithub, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import headshot from "../../assets/headshot.PNG";
import { IconContext } from "react-icons";
import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";

import "./AboutMe.css";
import resume from "../../assets/Pamela_Poor.pdf";

class AboutMe extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        const saveResume = () => {
            saveAs(resume, "Pamela_Poor.pdf");
        };
        return (
            <div className = "about-container">
                <div className="about-left">
                   <div className="about-left-inside">
                    <div className="about-left-content">
                            <div className="about-img">
                                <img src={headshot}/>
                            </div>
                            <h2>Pamela Poor</h2>
                            <h3>Full Stack Software Developer</h3>
                            <ul class = "icons">
                                <IconContext.Provider value={{ color: "#283618", size: "2em"}}>
                                    <li><a href = "https://github.com/pammypoor" target="_blank"><FaGithub/></a></li>
                                    <li><a href = "https://www.linkedin.com/in/pammypoor/" target="_blank"><FaLinkedin/></a></li>
                                    <li><a href = "https://twitter.com/pampoor" target="_blank"><FaTwitterSquare/></a></li>
                                </IconContext.Provider>
                            </ul>
                        </div>
                   </div>
                </div>
                <div className="about-right">
                    
                    <div className="about-right-content">
                        <TypeAnimation cursor={true} sequence={['Hello!', 5000, '']}  wrapper="h1" repeat = {Infinity}/>
                        <h2>A little bit about me</h2>
                        <p>
                            Software developer located in Southern California currently working as a full stack software developer for VerityStream. I have experience 
                            working in an Agile software development lifecycle. I'm always learning and studying new technologies. Check out the languages I know or head over to 
                            my <a href="#projects">projects</a> to take a look at my work. 
                        </p>
                        <p>
                            My personal interests revolve around working with my hands. When I'm not coding, I like to work on my car or building keyboards. 
                        </p>
                        <button className="cv_download_button" onClick={saveResume}>Download Resume &#8594;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;