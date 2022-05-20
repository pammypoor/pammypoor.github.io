import React from "react";
import SkillBar from "react-skillbars";

import "./Skills.css";

class Skills extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        const skills = [
            { type: 'C#', level: 100 },
            { type: 'Javascript', level: 90 },
            { type: 'Java', level: 85 },
            { type: 'SQL', level: 80 },
            { type: 'Python', level: 75 },
            { type: 'HTML', level: 60 }
          ];

          const colors = {
            bar: {
              hue: 45,
              saturation: 60,
              level: {
                minimum: 50,
                maximum: 100
              }
            },
            background: {
                hue: 0,
                saturation: 25,
                level: {
                  minimum: 50,
                  maximum: 100
                }
                
              }
          };

        return (
            <div className = "skills-container">
                <SkillBar skills={skills} colors = {colors}/>
            </div>
        )
    }
}

export default Skills;