import React from "react";
import { saveAs } from 'file-saver';
import { Timeline, Event } from "react-timeline-scribble";
import { slideInUp, slideInLeft } from "react-animations";
import axios from "axios";

import "./about.css";
import resume from "../../assets/Pamela_Poor.pdf";
import styled, { keyframes } from "styled-components";



class About extends React.PureComponent {
    constructor(props){
        super(props);
    }


    render() {
        const saveResume = () => {
            saveAs(resume, "Pamela_Poor.pdf");
        };

        const FadeInAnimation = keyframes`${slideInUp}`;
        const FadeInDiv = styled.div`
            animation: 1 2s ${FadeInAnimation}
        `;

        const LeftAnimation = keyframes`${slideInLeft}`;
        const LeftAniDiv = styled.div`
            animation: 1 2s ${LeftAnimation}
        `;

        const timeLine = (
            <Timeline>
                <Event interval={"Aug 2022 – Present"} title={"Fullstack Software Developer"} subtitle={"HealthStream"}>
                    <span className="tag">C#</span>
                    <span className="tag">EF Core</span>
                    <span className="tag">Angular</span>
                    <span className="tag">Typescript</span>
                    <span className="tag">HTML/CSS</span>
                    <span className="tag">Azure</span>
                    <span className="tag">Microsoft Sql Server</span>
                    <span className="tag">.NET</span>
                </Event>
                <Event interval={"May 2022 – Aug 2022"} title={"Software Engineer in Test"} subtitle={"Panasonic Avionics"}>
                    <span className="tag">Linux</span>
                    <span className="tag">MySQL</span>
                </Event>
                <Event interval={"Jan 2022 – May 2022"} title={"Software Engineer Intern"} subtitle={"E & TL Corp"}>
                    <span className="tag">C#</span>
                    <span className="tag">xUnit</span>
                    <span className="tag">Azure</span>
                    <span className="tag">.NET</span>
                </Event>
                <Event interval={"Aug 2019 – May 2022"} title={"B.S in Computer Science"} subtitle={"California State University, Long Beach"} />
            </Timeline>
        )


        return (
            <div className = "about-container h-100">
                <div className ="about-heading p-3">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="about-content row h-100 p-5">
                    <div className="col-sm-12 col-md-6 h-100 ">
                        <LeftAniDiv>    
                            <div className="about-me p-3 h-100">
                                <h2>Hi, I'm Pamela</h2>
                                <p className="text-start">I'm Pamela, a passionate Software Developer from Southern California currently working at <a href="https://www.healthstream.com/" target="_blank">HealthStream</a> as a Full Stack 
                                Software Developer, where I implement software solutions for healthcare adnimistration and credentialing.</p>

                                <p className="text-start">When I'm not working, I love to work on my ever-growing list of hobbies. Currently, I am interested in building keyboards and messing around with
                                    my Raspberry Pi. Take a look at my <a href="https://www.healthstream.com/" target="_blank">Github Page</a>. I'm always looking to learn and explore new technologies.</p>
                                <button type="submit" class="download-resume" onClick={saveResume}>Download Resume</button>
                            </div>
                        </LeftAniDiv>   
                    </div>
                    <div className="about-timeline col-sm-12 col-md-6  pt-3 w-sm-100">
                        <FadeInDiv>
                            {timeLine}
                        </FadeInDiv>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;