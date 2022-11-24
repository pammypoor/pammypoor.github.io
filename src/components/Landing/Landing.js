import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaGithub, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import headshot from "../../assets/headshot.PNG";
import { IconContext } from "react-icons";
import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./Landing.css";
import resume from "../../assets/Pamela_Poor.pdf";
import Button from 'react-bootstrap/Button';

class Landing extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        const saveResume = () => {
            saveAs(resume, "Pamela_Poor.pdf");
        };
        return (
            <div className = "landing-container">
                <Container>
                    <Row>               
                        <Col  className="d-flex align-items-center text-start">
                            <div>
                            <TypeAnimation cursor={true} sequence={['Hello', ,10000]}  wrapper="h1" repeat = {1}/>
                            <h4>I'm a Full Stack Software Developer</h4>
                            <button type="submit" class="read-more"><a href="#about">Read More</a></button>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center" lg={5}>
                            <div>
                                <img src={headshot} className="img-fluid rounded w-100"/>
                                <h4>Pamela Poor</h4>
                                <h6>Full Stack Software Developer at HealthStream</h6>
                                <ul class = "icons">
                                    <IconContext.Provider value={{ color: "#283618", size: "2em"}}>
                                        <li><a href = "https://github.com/pammypoor" target="_blank"><FaGithub/></a></li>
                                        <li><a href = "https://www.linkedin.com/in/pammypoor/" target="_blank"><FaLinkedin/></a></li>
                                    </IconContext.Provider>
                                </ul>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Landing;