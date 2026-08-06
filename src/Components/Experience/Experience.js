import React from "react";
import "./Experience.css";

export default function Experience(props) {
	const [experienceData, setExperienceData] = React.useState([]);
	React.useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', '/data/experience.json');
		xhr.onload = function () {
			if (xhr.status === 200) {
				console.log(JSON.parse(xhr.responseText))
				setExperienceData(JSON.parse(xhr.responseText));
			}
		};
		xhr.send();
	}, []);

	let parseTime = React.useCallback((timeArr) => {
		return "temp"
	})

	return (
		<div>
			{experienceData.map((experience, i) =>
				<div key={"experience-" + i}>
					<div>{experience.position}</div>
					<div>{experience.company}</div>
					<div>{parseTime(experience.time)}</div>
					
				</div>
			
			)}
		</div>
			
	);
};