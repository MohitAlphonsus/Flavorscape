import styled from 'styled-components';

const MainHeading = styled.h1`
	font-size: 6rem;
`;

const SecondaryHeading = styled.h2`
	font-size: 5rem;
`;

const TertiaryHeading = styled.h2`
	font-size: 3rem;
`;

const SubHeading = styled.h4`
	font-size: 1.6rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: var(--color-accent-gold);
`;

const MainText = styled.p`
	font-size: 1.8rem;
	line-height: 1.7;
`;

export { MainHeading, SecondaryHeading, TertiaryHeading, SubHeading, MainText };
