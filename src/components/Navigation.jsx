import styled from 'styled-components';
import { navigationItems } from '../constants/nav';
import NavItem from './NavItem';
import { useState } from 'react';

const NavigationBackground = styled.div`
	position: fixed;
	top: 3.5rem;
	right: 3.5rem;
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	z-index: 1000;
	background: radial-gradient(
		circle,
		rgba(230, 201, 162, 1) 0%,
		rgba(255, 248, 225, 1) 100%
	);
	transition: all 0.5s ease-in-out;
	transform: scale(0);
`;

const NavgationButton = styled.button`
	border: none;
	height: 7rem;
	width: 7rem;
	border-radius: 50%;
	position: fixed;
	top: 3rem;
	right: 3rem;
	z-index: 2000;
	cursor: pointer;
`;

const NavElement = styled.nav`
	height: 100dvh;
	width: 100%;
	position: fixed;
	z-index: 1500;
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s 0.2s ease-in-out;
`;

const NavList = styled.ul`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

function Navigation() {
	const [isBg, setIsBg] = useState(true);

	function handleNavClick(e) {
		setIsBg(prev => !prev);
		const bg = e.target.nextElementSibling;
		const navEl = e.target.nextElementSibling.nextElementSibling;

		if (isBg) {
			bg.style.transform = 'scale(100)';
			navEl.style.transform = ' translateX(0)';
			navEl.style.opacity = '1';
			navEl.style.visibility = 'visible';
		} else {
			bg.style.transform = 'scale(0)';
			navEl.style.transform = ' translateX(-100%)';
			navEl.style.opacity = '0';
			navEl.style.visibility = 'hidden;';
		}
	}

	return (
		<section>
			<NavgationButton onClick={handleNavClick}>Menu</NavgationButton>
			<NavigationBackground>&nbsp;</NavigationBackground>
			<NavElement id="nav">
				<NavList>
					{navigationItems.map(navItem => (
						<NavItem
							key={navItem.id}
							name={navItem.navName}
							id={navItem.id}
							href={navItem.hrefLink}
						/>
					))}
				</NavList>
			</NavElement>
		</section>
	);
}

export default Navigation;
