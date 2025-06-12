import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Academic History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August, 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graduate Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">SUNY University at Buffalo</h4>
            <h4 className="vertical-timeline-element-subtitle">Buffalo, NY</h4>
            <p>
              Machine Learning, Computer Vision, Deep Learning, Data Science, OpenCV
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="March, 2021 - August, 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">ThermoFisher Scientific</h4>
            <h4 className="vertical-timeline-element-subtitle">Bangalore, KA, IN</h4>
            <p>
              GenAI/LLM, RAG, Data Engineering, ETL Pipelines, Artificial Intelligence, 3D Configurator (Unity)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May, 2019 - March, 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Quess Corp Limited</h4>
            <h4 className="vertical-timeline-element-subtitle">Bangalore, KA, IN</h4>
            <p>
              OpenCV, Computer Vision, Machine Learning, UIPath, RPA, Python, C#
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June, 2015 - May, 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Amrita Vishwa Vidhyapeetham</h4>
            <h4 className="vertical-timeline-element-subtitle">Coimbatore, TN, IN</h4>
            <p>
              Machine Learning, Computer Vision, Data Structures, Design Analysis and Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;