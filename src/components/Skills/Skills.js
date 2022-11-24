import React from "react";
import {FaReact, FaGitAlt, FaGithub, FaNodeJs} from 'react-icons/fa';
import {SiMicrosoftazure, SiMysql, SiVisualstudio} from 'react-icons/si';
import { IconContext } from "react-icons";
import "./Skills.css";
import AngularIcon from '../../assets/skill-icons/AngularIcon.png';
import ReactIcon from '../../assets/skill-icons/ReactIcon.png';
import JavaScriptIcon from '../../assets/skill-icons/JavaScriptIcon.svg';
import TypescriptIcon from '../../assets/skill-icons/TypescriptIcon.png';
import CSSIcon from '../../assets/skill-icons/CSSIcon.svg';
import BootstrapIcon from '../../assets/skill-icons/BootstrapIcon.svg';
import CSharpIcon from '../../assets/skill-icons/CSharpIcon.svg';
import JavaIcon from '../../assets/skill-icons/JavaIcon.png';
import MSqlServerIcon from '../../assets/skill-icons/MSqlServerIcon.png';
import NetCoreIcon from '../../assets/skill-icons/NetCoreIcon.png';
import GitIcon from '../../assets/skill-icons/GitIcon.png';
import AzureDevopsIcon from '../../assets/skill-icons/AzureDevOpsIcon.png';
import ABPBoilerIcon from '../../assets/skill-icons/ABPBoilerIcon.png';
import EFCoreIcon from '../../assets/skill-icons/EFCoreIcon.png';

import { Container, Row, Col } from "react-bootstrap";


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
            <div className = "skills-container text">
              <Container>
                <h5 className="text-start">Frontend</h5>
                <Row className="align-items-center logos mt-3">
                  <Col className="logo" xs={3}>
                    <img src={AngularIcon} className="img-fluid"/>
                    <p>Angular</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    
                    <img src={ReactIcon} className="img-fluid"/>
                    <p>React JS</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={JavaScriptIcon} className="img-fluid"/>
                    <p>JavaScript</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={TypescriptIcon} className="img-fluid"/>
                    <p>Typescript</p>
                  </Col>
                  <Col className="logo" xs={3}>
                      <img src={CSSIcon} className="img-fluid"/>
                      <p>CSS</p>
                    </Col>
                  <Col className="logo" xs={3}>
                    <img src={BootstrapIcon} className="img-fluid"/>
                    <p>Bootstrap</p>
                  </Col>
                </Row>
                <h5 className="text-start">Backend</h5>
                <Row className="align-items-center logos">
                  <Col className="logo" xs={3}>
                    <img src={CSharpIcon} className="img-fluid"/>
                    <p>C#</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={JavaIcon} className="img-fluid"/>
                    <p>Java</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={MSqlServerIcon} className="img-fluid"/>
                    <p>Microsoft SQL Server</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={NetCoreIcon} className="img-fluid"/>
                    <p>.Net Core</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={ABPBoilerIcon} className="img-fluid"/>
                    <p>AspNet Boilerplate</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={EFCoreIcon} className="img-fluid"/>
                    <p>Entity Framework Core</p>
                  </Col>
                </Row>
                <h5 className="text-start">Tools</h5>
                <Row className="align-items-center logos">
                  <Col className="logo" xs={3}>
                    <img src={GitIcon} className="img-fluid"/>
                    <p>Git</p>
                  </Col>
                  <Col className="logo" xs={3}>
                    <img src={AzureDevopsIcon} className="img-fluid"/>
                    <p>Azure DevOps</p>
                  </Col>
                  
                  
                </Row>
              </Container>
              
              
            </div>
        )
    }
}

export default Skills;