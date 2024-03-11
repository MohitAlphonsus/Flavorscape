import styled from 'styled-components';

const ButtonStyle = styled.button`
	border: none;
	background: none;
	font-size: 1.8rem;
	letter-spacing: 1px;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.2s ease-in;
	margin-top: ${props => 0 || props?.margintop}rem;
`;

const ButtonPrimary = styled(ButtonStyle)`
	padding: 1.8rem 3rem;
	background: var(--color-accent-gold);
`;

const ButtonLink = styled(ButtonStyle)`
	border-bottom: 1px solid currentColor;
	padding-bottom: 0.5rem;

	&:hover {
		letter-spacing: 2px;
	}
`;

function Button({ children, margintop, href }) {
	if (!href)
		return <ButtonPrimary margintop={margintop}>{children}</ButtonPrimary>;

	return <ButtonLink>{children}</ButtonLink>;
}

export default Button;
