import React from "react";

import ProjectGallery from "../Project Gallery/ProjectGallery";

import "./Projects.css";

class Projects extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = "projects-container">
                <h1>Projects</h1>
                <div className="project-gallery-wrapper">
                    {<ProjectGallery/>}
                </div>
                
            </div>
        )
    }
}

export default Projects;