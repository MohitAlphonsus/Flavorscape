import styled from 'styled-components';
import { SmallText, TertiaryHeading } from '../UI/Typo';

const FeatureBox = styled.li`
	display: grid;
	grid-template-columns: min-content 1fr;
	align-content: start;
	column-gap: 2rem;
	row-gap: 1rem;
	padding: 4rem 2rem;

	& > *:first-child {
		font-size: 2.5rem;
		grid-row: 1 / 3;
	}
`;

const IconStyle = styled.div`
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	background-color: var(--color-primary);
	color: var(--color-accent-white);
	display: grid;
	place-content: center;
`;

function Feature({ Icon, heading, desc }) {
	return (
		<FeatureBox>
			<IconStyle>
				<Icon />
			</IconStyle>
			<TertiaryHeading $secondary="true">{heading}</TertiaryHeading>
			<SmallText $text="light">{desc}</SmallText>
		</FeatureBox>
	);
}

export default Feature;
