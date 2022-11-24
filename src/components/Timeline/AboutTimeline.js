import React from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import "./AboutTimeline.css";


class AboutTimeline extends React.PureComponent {
    constructor(props){
        super(props);
    }

    
    render() {
        return (
            <div className = "timeline-container">
                <Timeline lineColor={'dad7cd'}>
                    <TimelineItem
                        key="001"
                        dateText="08/2022 – Present"
                        style={{ color: '#dad7cd' }}
                    >
                        <h3>Full Stack Software Developer</h3>
                        <h4>HealthStream</h4>
                        <p>
                            Software solutions for healthcare administration and credentialing using Angular, C#, 
                            Entity Framework Core, HTML/CSS, Microsoft Azure, .NET, and SQL.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="06/2022 – 08/2022"
                        style={{ color: '#dad7cd' }}
                    >
                        <h3>Software Engineer in Test</h3>
                        <h4>Panasonic Avionics</h4>
                        <p>
                            Integration of software/hardware systems and testing for In-Flight-Entertainment (IFE) 
                            systems and Line Replaceable Units (LRU).
                        </p>
                        <p>
                            Created and executed detailed integration and regression test plans utilizing Jama software.
                        </p>
                        <p>
                            Performed troubleshooting of hardware and software issues using linux-based command line, 
                            MySql and manual system testing
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="01/2022 – 05/2022"
                        style={{ color: '#dad7cd' }}
                    >
                        <h3>Software Engineer - Intern</h3>
                        <h4>E & TL Corp</h4>
                        <p>
                            Designed and implemented shipping container tracking management functionality 
                            on customer relationship management (CRM) desktop application using C#, ASP.Net MVC and Sql.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="004"
                        dateText="09/2019 – 05/2022"
                        style={{ color: '#dad7cd' }}
                    >
                        <h3>B.S Computer Science</h3>
                        <h4>California State University, Long Beach</h4>
                        <p></p>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}

export default AboutTimeline;