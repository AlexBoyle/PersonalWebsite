import React from "react";
import "./Section.css";

export default function Section(props) {
	return (
		<div className="section" id={props.name}>
			<div className="box1">
				<div className="box2">
					{props.children}
				</div>
			</div>
			
		</div>
	);
};