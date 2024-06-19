import React from "react";
import "./Home.css";
import Sections from "../Components/Section/Sections";
import NavigationButtonContainer from "../Components/Nav/NavigationButtonContainer"
function HomePage() {
	let sectionNames = Object.keys(Sections)

	return (
		<>
			<div className="mainContent">
				<NavigationButtonContainer sectionNames={sectionNames}></NavigationButtonContainer>
				<div className="contentBody">
					{sectionNames.map(name => Sections[name])}
				</div>

			</div>

		</>
	);
}

export default HomePage;
