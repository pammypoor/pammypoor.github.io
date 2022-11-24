import React from "react";
import Header from "../../components/Header/Header";
import Timeline from "../../components/Timeline/AboutTimeline";
import Skills from "../../components/Skills/Skills";
import AboutMe from "../../components/AboutMe/AboutMe";
import Projects from "../../components/Projects/Projects";
import Landing from "../../components/Landing/Landing";

import "./Home.css";

class Home extends React.PureComponent {
    render() {
        return (
            <div className = "home-wrapper">
                <div  className = "home-header">
                    {<Header/>}
                </div>
                <div className="landing-wrapper">
                    {<Landing/>}
                </div>
                <div className = "about-wrapper" id = "about">
                    <div className="aboutme-wrapper">
                        <h2>About Me</h2>
                        {<AboutMe/>}
                    </div>
                    <div className="skills-wrapper">
                        <h2>My Tech Stack</h2>
                        {<Skills/>}
                    </div>
                </div>
                <div className="projects-wrapper" id = "projects">
                    {<Projects/>}
                </div>
            </div>
        )
    }
}

export default Home;