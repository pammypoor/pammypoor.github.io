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
                <Event interval={"May 2026 – Present"} title={"Software Engineer"} subtitle={"Costar Group"}>
                    <span className="tag">C#</span>
                    <span className="tag">GraphQL</span>
                    <span className="tag">React</span>
                    <span className="tag">.NET</span>
                    <span className="tag">Linq</span>
                </Event>
                <Event interval={"Aug 2022 – May 2026"} title={"Software Developer II"} subtitle={"HealthStream"}>
                    <span className="tag">C#</span>
                    <span className="tag">EF Core</span>
                    <span className="tag">Angular</span>
                    <span className="tag">Typescript</span>
                    <span className="tag">HTML/CSS</span>
                    <span className="tag">Microsft Azure</span>
                    <span className="tag">Microsoft Sql Server</span>
                    <span className="tag">.NET</span>
                    <span className="tag">Linq</span>
                    <h6>Designed and developed greenfield cloud based full stack application using C#, .NET 8, Angular, SQL Server and Microsoft Azure.</h6>
                    <br/>
                    <h6>Implemented asynchronous processing and background jobs with Hangfire, supporting scheduled tasks, external data synchronization, and event driven tasks.</h6>
                    <br/>
                    <h6>Developed real-time notification platform using SignalR, enabling transactional and event driven email and in-app notifications.</h6>
                </Event>
                <Event interval={"Aug 2019 – May 2022"} title={"B.S in Computer Science"} subtitle={"California State University, Long Beach"}>
                    <h6>Affiliations: Society of Women Engineers (SWE), Women in Computing (WiC)</h6>
                    <h6>Honors: Deans List</h6>
                </Event>
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
                                <p className="text-start">I'm Pamela, a passionate Software Engineer from Southern California currently working at Costar Group. I have 4+ years of experience in full stack development working with C#, .NET backend and React/Angular frontend frameworks.</p>

                                <p className="text-start">When I'm not working, I love to work on my ever-growing list of hobbies. Currently, I am interested in building keyboards and messing around with
                                    my Raspberry Pi. Take a look at my <a href="https://github.com/pammypoor" target="_blank">Github Page</a>. I'm always looking to learn and explore new technologies.</p>
                                {/* <button type="submit" class="download-resume" onClick={saveResume}>Download Resume</button> */}
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