import React from "react";
import SkillBar from "react-skillbars";
import {FaReact, FaGitAlt, FaGithub, FaNodeJs} from 'react-icons/fa';
import {SiMicrosoftazure, SiMysql, SiVisualstudio} from 'react-icons/si';
import { IconContext } from "react-icons";
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
                <h3>Technologies</h3>
                <ul className="icons-skills">
                  <li><a href = "https://azure.microsoft.com/en-us/" target="_blank"><SiMicrosoftazure/></a><a href = "https://git-scm.com/" target="_blank"><FaGitAlt/></a></li>
                  <li><a href = "https://github.com/pammypoor" target="_blank"><FaGithub/></a><a href = "https://reactjs.org/" target="_blank"><SiMysql/></a></li>
                  <li><a href = "https://nodejs.org/en/" target="_blank"><FaNodeJs/></a><a href = "https://reactjs.org/" target="_blank"><FaReact/></a></li>
                  <li><a href = "https://visualstudio.microsoft.com/" target="_blank"><SiVisualstudio/></a></li>          
                </ul>
              </div>
            </div>
        )
    }
}

export default Skills;