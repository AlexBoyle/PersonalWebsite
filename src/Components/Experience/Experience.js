import React from "react";
import "./Experience.css";

export default function Experience(props) {
	const [experienceData, setExperienceData] = React.useState([]);
	React.useEffect(() => {
		fetch("/data/experience.json")
			.then((res) => res.json())
			.then((data) => setExperienceData(data));
	}, []);

	return (
		<div className="experienceList">
			{experienceData.map((experience, i) => (
				<div className="experienceEntry" key={"experience-" + i}>
					<div className="experienceHeader">
						<div className="experiencePosition">{experience.position}</div>
						<div className="experienceDate">{experience.date}</div>
					</div>
					<div className="experienceSubHeader">
						<div className="experienceCompany">{experience.company}</div>
						<div className="experienceLocation">{experience.location}</div>
					</div>
					{experience.desc?.map((d, j) => (
						<div className="experienceDesc" key={"desc-" + j}>
							<div className="experienceDescName">{d.name}</div>
							{d.points && (
								<ul className="experienceDescPoints">
									{d.points.map((p, k) => (
										<li key={"point-" + k}>{p}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
