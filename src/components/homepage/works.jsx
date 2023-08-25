import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/focalx.jpg"
								alt="focalx"
								className="work-image"
							/>
							<div className="work-title">Focal X</div>
							<div className="work-subtitle">
							internship Web Development Front-end 
							</div>
							<div className="work-duration">2023 - Present </div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
