import React from "react";
import "./Home.css";

function HomePage() {
	return (
		<div className="homeHero">
			<img className="profileImg" src="/images/ProfilePic.jpg" alt="Alex Boyle" />
			<h1>Alex Boyle</h1>
			<p className="tagline">Software Engineer &mdash; Chicago, IL</p>
		</div>
	);
}

export default HomePage;
