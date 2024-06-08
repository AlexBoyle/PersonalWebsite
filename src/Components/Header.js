import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./HeaderElements";

function Header() {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/">Home</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
}

export default Header;
