import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 32px;
	box-sizing: border-box;
	background-color: var(--color-bg-elevated);
	border-bottom: 1px solid var(--color-border);
`;

export const NavLink = styled(Link)`
	color: var(--color-text-secondary);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	cursor: pointer;
	font-weight: 500;
	font-size: 0.95rem;
	transition: color 0.2s ease;
	&.active {
		color: var(--color-text);
	}
	:hover {
		color: var(--color-text);
	}
`;

export const NavAnchor = styled.a`
	color: var(--color-text-secondary);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	cursor: pointer;
	font-weight: 500;
	font-size: 0.95rem;
	transition: color 0.2s ease;
	:hover {
		color: var(--color-text);
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	gap: 4px;
`;
