import React from "react";
import {FaGithub, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import headshot from "../../assets/headshot.PNG";
import { IconContext } from "react-icons";
import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AboutTimeline from "../Timeline/AboutTimeline";
import AnimatedText from 'react-animated-text-content';

import "./AboutMe.css";
import resume from "../../assets/Pamela_Poor.pdf";
import Skills from "../Skills/Skills";

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
                <Container>
                    <Row>
                        <Col className="timeline d-none d-sm-block">
                            {<AboutTimeline/>}
                        </Col>
                        <Col>
                        <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease',
                        }}
                        interval={0.01}
                        duration={0.8}
                        >
                            TEST TEST TEST 
                        </AnimatedText>
                        

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutMe;