import React from "react";
import {
	Nav,
	NavLink,
	NavAnchor,
	NavMenu,
} from "./HeaderElements";

function Header() {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/experience">Experience</NavLink>
					<NavAnchor href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</NavAnchor>
				</NavMenu>
			</Nav>
		</>
	);
}

export default Header;
