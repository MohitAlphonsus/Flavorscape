import styled from 'styled-components';
import Heading from '../UI/Heading';
import { SecondaryHeading, SubHeading } from '../UI/Typo';
import { features } from '../constants/features';
import Feature from './Feature';

const FeaturesStyle = styled.section`
	padding: 6rem 5%;
`;

const FeatureContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	box-shadow: 0 1rem 2rem 2rem rgba(0, 0, 0, 0.1);
	border-radius: 9px;
`;

function Features() {
	return (
		<FeaturesStyle>
			<Heading>
				<SubHeading $text="primary-dark">
					Discover Our Unique Features
				</SubHeading>
				<SecondaryHeading $secondary="true">
					Experience What Sets Us Apart
				</SecondaryHeading>
			</Heading>
			<FeatureContainer>
				{features.map(feature => (
					<Feature
						key={feature.id}
						Icon={feature.icon}
						heading={feature.heading}
						desc={feature.desc}
					/>
				))}
			</FeatureContainer>
		</FeaturesStyle>
	);
}

export default Features;
