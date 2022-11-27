import React from "react";
import { saveAs } from 'file-saver';
import { Timeline, Event } from "react-timeline-scribble";
import { slideInUp, slideInRight } from "react-animations";
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

        const RightAnimation = keyframes`${slideInRight}`;
        const RightAniDiv = styled.div`
            animation: 1 2s ${RightAnimation}
        `;

        const timeLine = (
            <Timeline>
                <Event interval={"Aug 2022 – Present"} title={"Fullstack Software Developer"} subtitle={"HealthStream"}>
                Software solutions for healthcare administration and credentialing using Angular, C\#, Entity Framework Core, 
                HTML/CSS, Microsoft Azure, .NET, and SQL
                </Event>
                <Event interval={"May 2022 – Aug 2022"} title={"Software Engineer in Test"} subtitle={"Panasonic Avionics"} >
                Integration of software/hardware systems and testing for In-Flight-Entertainment 
                (IFE) systems and Line Replaceable Units (LRU)
                </Event>
                <Event interval={"Jan 2022 – May 2022"} title={"Software Engineer Intern"} subtitle={"E & TL Corp"} >
                Designed and implemented shipping container tracking management functionality 
                on customer relationship management (CRM) desktop application using C#, ASP.Net MVC and Sql.
                </Event>
                <Event interval={"Aug 2019 – May 2022"} title={"B.S in Computer Science"} subtitle={"California State University, Long Beach"} >
                Affiliations: Association for Computing Machinery (ACM), Society of Women Engineers (SWE), Women in Computing (WiC)
                </Event>
            </Timeline>
        )


        return (


            <div className = "about-container h-100 mx-5 py-4">
                <div className="about-content d-flex w-100 h-100 ms-5">
                    <div className="about-timeline  w-100 h-100 d-none d-sm-block">
                        <FadeInDiv>
                            {timeLine}
                        </FadeInDiv>
                    </div>
                    <div className="w-100 h-100 d-flex flex-column  justify-content-center text-start">
                        <RightAniDiv>    
                            <div className="about-me">
                            <h6 className="text-left">ABOUT ME</h6>
                                <h2>Hi, I'm Pamela</h2>
                                <p className="text-start">I'm Pamela, a passionate Software Developer from Southern California currently working at <a href="https://www.healthstream.com/" target="_blank">HealthStream</a> as a Full Stack 
                                Software Developer, where I create develop software solutions ofr healthcare adnimistration and credentialing.</p>

                                <p className="text-start">When I'm not coding, I love to work on my ever-growing list of hobbies. Currently, I am interested in building keyboards and messing around with
                                    my Raspberry Pi. Take a look at my <a href="https://www.healthstream.com/" target="_blank">Github Page</a>. I'm always looking to learn and explore new technologies.</p>
                                <button type="submit" class="download-resume" onClick={saveResume}>Download Resume</button>
                            </div>
                        </RightAniDiv>   
                    </div>
                        
                    
                    
                </div>
            </div>
        )
    }
}

export default About;