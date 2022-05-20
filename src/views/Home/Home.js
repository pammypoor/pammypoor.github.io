import React from "react";
import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";
import AboutMe from "../../components/AboutMe/AboutMe";
import Projects from "../../components/Projects/Projects";

import "./Home.css";

class Home extends React.PureComponent {
    render() {
        return (
            <div className = "home-wrapper">
                <div  className = "home-header">
                    {<Header/>}
                </div>
                <div className = "about-wrapper" id = "about">
                    <div className="aboutme-wrapper">
                        {<AboutMe/>}
                    </div>
                    <div className="skills-wrapper">
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