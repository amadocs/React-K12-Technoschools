import React from 'react';
import { Link } from 'react-router-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Verticals() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          //   date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<></>}
        >
          <center>
            <Link
              to="https://www.orchidsinternationalschool.com/"
              target="_blank"
            >
              <img
                src="assets/images/verticals/logo-1.png"
                alt="Orchids"
                className="logo-img"
              />
              <h3 className="vertical-timeline-element-title">
                Orchids The International School
              </h3>
            </Link>
          </center>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(247, 211, 58)', color: '#fff' }}
          iconStyle={{ background: 'rgb(247, 211, 58)', color: '#fff' }}
          icon={<></>}
        >
          <center>
            <Link to="https://k12technoschools.com/" target="_blank">
              <img
                src="assets/images/verticals/logo-2.png"
                alt="Orchids"
                className="logo-img"
              />
              <h3 className="vertical-timeline-element-title">
                School Partnership Model
              </h3>
            </Link>
          </center>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<></>}
        >
          <center>
            <Link to="https://mysparklebox.com/" target="_blank">
              <img
                src="assets/images/verticals/logo-3.png"
                alt="Orchids"
                className="logo-img"
              />
              <h3 className="vertical-timeline-element-title">SparkleBox</h3>
            </Link>
          </center>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(247, 211, 58)', color: '#fff' }}
          iconStyle={{ background: 'rgb(247, 211, 58)', color: '#fff' }}
          icon={<></>}
        >
          <center>
            <Link to="https://sparklebox.school/" target="_blank">
              <img
                src="assets/images/verticals/logo-4.png"
                alt="Orchids"
                className="logo-img"
              />
              <h3 className="vertical-timeline-element-title">
                SparkleBox.School
              </h3>
            </Link>
          </center>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33,150,243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(33,150,243)', color: '#fff' }}
          icon={<></>}
        >
          <center>
            <Link to="https://www.plufo.com/" target="_blank">
              {' '}
              <img
                src="assets/images/verticals/logo-5.png"
                alt="Orchids"
                className="logo-img"
              />
              <h3 className="vertical-timeline-element-title">Plufo.com</h3>
            </Link>
          </center>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(247, 211, 58)', color: '#fff' }}
          iconStyle={{ background: 'rgb(247, 211, 58)', color: '#fff' }}
          icon={<></>}
        >
          <center>
            <Link to="https://letseduvate.com/" target="_blank">
              <img
                src="assets/images/verticals/logo-6.png"
                alt="Orchids"
                className="logo-img"
              />
              <h3 className="vertical-timeline-element-title">Let's Eduvate</h3>
            </Link>
          </center>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
