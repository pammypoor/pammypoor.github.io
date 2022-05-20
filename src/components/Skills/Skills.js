import React from "react";
import SkillBar from "react-skillbars";

import "./Skills.css";

class Skills extends React.PureComponent {
    render() {
        const skills = [
          { type: 'C#', level: 100 },
          { type: 'Javascript', level: 90 },
          { type: 'Java', level: 85 },
          { type: 'C++', level: 85 },
          { type: 'SQL', level: 80 },
          { type: 'Python', level: 75 },
          { type: 'HTML/CSS', level: 60 }
        ];
        
        const frameworkSkills = [
          { type: 'React', level: 100 },
          { type: 'ASP.NET', level: 90 },
          { type: 'xUnit', level: 90 }
        ];

          const colors = {
            bar: {
              hue: 40,
              saturation: 100,
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
              <div className = "skills-left">
                <h3>Languages</h3>
                <SkillBar skills={skills} colors = {colors}/>
              </div>
              <div className = "skills-right">
                <h3>Frameworks</h3>
                <SkillBar skills={frameworkSkills} colors = {colors}/>
              </div>
            </div>
        )
    }
}

export default Skills;