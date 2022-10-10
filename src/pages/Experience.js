import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, House, Flight, DirectionsBoat } from "@mui/icons-material";

import "../pages/styles/Experience.css";

function Experience() {
	return (
		<div className="experience">
			<VerticalTimeline lineColor="#3e497a">
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2022 - 2022"
					iconStyle={{ background: "#3e497a", color: "#fff" }}
					icon={<School />}
				>
					<h3 className="vertical-timeline-element-title">University of Denver, Denver, Colorado</h3>
					<p> Computer Coding and Web Devolopment Bootcamp</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="1998 - 2022"
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<House />}
				>
					<h3 className="vertical-timeline-element-title">Timberhead Customs, Inc, Longmont, Colorado</h3>
					<p> Custom Building and Finish Carpentry</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2012 - 2013"
					iconStyle={{ background: "#3e497a", color: "#fff" }}
					icon={<Flight />}
				>
					<h3 className="vertical-timeline-element-title">Air West Aviation, Longmont, Colorado</h3>
					<p> FAA Certification: Private Pilot,High Performance, Complex, Tailwheel</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="1994 - 1997"
					iconStyle={{ background: "#3e497a", color: "#fff" }}
					icon={<School />}
				>
					<h3 className="vertical-timeline-element-title">University of Colorado at Boulder, Boulder, Colorado</h3>
					<p> Kinesiology Major: Three Years Completed</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="1991 - 1993"
					iconStyle={{ background: "#3e497a", color: "#fff" }}
					icon={<School />}
				>
					<h3 className="vertical-timeline-element-title">Colorado AeroTech, Broomfield, Colorado</h3>
					<p> FAA Certication: Airframes and Powerplants Mechanic</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="1988 - 1992"
					iconStyle={{ background: "#e9d35b", color: "#fff" }}
					icon={<DirectionsBoat />}
				>
					<h3 className="vertical-timeline-element-title">United States Navy: NAS North Island, Coronado, California</h3>
					<p> Aviation Electrician's Mate: Airman </p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="1985 - 1988"
					iconStyle={{ background: "#3e497a", color: "#fff" }}
					icon={<School />}
				>
					<h3 className="vertical-timeline-element-title">Loveland High School, Loveland, Colorado</h3>
					<p> High School Diploma</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default Experience;
