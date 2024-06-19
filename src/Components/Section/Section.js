import React from "react";
import "./Section.css";

export default function Section(props) {
	return (
		<div className="section" id={props.name}>
			{props.children}
		</div>
	);
};