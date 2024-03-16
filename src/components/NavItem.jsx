import styled from 'styled-components';

const ListItem = styled.li``;

const NavigationLink = styled.a`
	display: block;
	text-decoration: none;
	font-size: 2.5rem;

	color: var(--color-secondary);
	text-transform: uppercase;
	padding: 1rem 2rem;
	background: linear-gradient(
		135deg,
		transparent 0%,
		transparent 50%,
		var(--color-accent-white) 50%
	);
	background-size: 250%;
	transition: all 0.3s ease;

	&:hover {
		background-position: 100%;
		transform: translateX(1rem);
	}

	& > span {
		display: inline-block;
		margin-right: 1rem;
	}
`;

function NavItem({ name, id, href }) {
	return (
		<ListItem>
			<NavigationLink href={href}>
				<span>0{id}</span>
				{name}
			</NavigationLink>
		</ListItem>
	);
}

export default NavItem;
