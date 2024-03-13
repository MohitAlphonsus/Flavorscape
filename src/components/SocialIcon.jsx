import styled from 'styled-components';

const SocialIconStyle = styled.li`
	height: 5rem;
	width: 5rem;
	border-radius: 50%;
	border: 1px solid var(--color-primary);
	display: grid;
	place-content: center;
	cursor: pointer;
	transition: all 0.2s ease-in;

	&:hover {
		background-color: var(--color-primary);
		color: var(--color-secondary);
	}

	& > * {
		font-size: 2rem;
	}
`;

function SocialIcon({ Icon }) {
	return (
		<SocialIconStyle>
			<Icon />
		</SocialIconStyle>
	);
}

export default SocialIcon;
