import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {FaBriefcase, FaSchool} from 'react-icons/fa';
import "./Timeline.css";

import 'react-vertical-timeline-component/style.min.css';

class Timeline extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "timeline-container">
                <VerticalTimeline
                    lineColor="#e9ecef"
                    Timeline = "2-columns"
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(210, 125, 45)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(210, 125, 45)' }}
                        date="June 2022 - Present"
                        iconStyle={{ background: 'rgb(210, 125, 45)', color: '#fff' }}
                        icon={<FaBriefcase/>}
                    >
                    <h3 className="vertical-timeline-element-title">Software Engineer in Test At Panasonic Avionics</h3>
                    <h4 className="vertical-timeline-element-subtitle">Irvine, CA</h4>
                    <p></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(210, 125, 45)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(210, 125, 45)' }}
                        date="August 2019 - May 2022"
                        iconStyle={{ background: 'rgb(210, 125, 45)', color: '#fff' }}
                        icon={<FaSchool/>}
                    >
                    <h3 className="vertical-timeline-element-title">B.S in Computer Science at California State University, Long Beach</h3>
                    <h4 className="vertical-timeline-element-subtitle">Long Beach, CA</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(210, 125, 45)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(210, 125, 45)' }}
                        date="August 2016 - May 2019"
                        iconStyle={{ background: 'rgb(210, 125, 45)', color: '#fff' }}
                        icon={<FaSchool/>}
                    >
                    <h3 className="vertical-timeline-element-title">A.S of Computer Science at Saddleback College</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mission Viejo, CA</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default Timeline;