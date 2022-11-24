import React from "react";
import {FaGithub, FaLinkedin, FaTwitterSquare} from 'react-icons/fa';
import headshot from "../../assets/headshot.PNG";
import { IconContext } from "react-icons";
import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AboutTimeline from "../Timeline/AboutTimeline";

import "./AboutMe.css";
import resume from "../../assets/Pamela_Poor.pdf";

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
                        <Col className="timeline">
                            {<AboutTimeline/>}
                        </Col>
                        <Col>TEST
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutMe;