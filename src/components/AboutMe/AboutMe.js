import React from "react";
import TypeAnimation from 'react-type-animation';
import {FaGithub, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';

import "./AboutMe.css";
import headshot from "../../assets/headshot.PNG";
import { IconContext } from "react-icons";


class AboutMe extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "about-container">
                <div className="about-left">
                   <div className="about-left-inside">
                    <div className="about-left-content">
                            <div className="about-img">
                                <img src={headshot}/>
                            </div>
                            <h2>Pamela Poor</h2>
                            <h3>Freelance Software Developer</h3>
                            <ul class = "icons">
                                <IconContext.Provider value={{ color: "red", size: "2em"}}>
                                    <li><FaGithub/></li>
                                    <li><FaLinkedin/></li>
                                    <li><FaTwitterSquare/></li>
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
                            Recent graduate of Computer Science from California State University, Long Beach with full-stack software development experience. 
                            I have experience leading and working in an Agile software development lifecycle as well as experience in SCRUM standups. I'm always learning 
                            studying new technologies. Check out the languages I know below or head over to my projects to take a look at my work.
                        </p>
                        <p>
                            My personal interests revolve around working with my hands. When I'm not coding, I like to work on my car or build keyboards. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;