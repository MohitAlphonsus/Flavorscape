import styled from 'styled-components';
import { waveTop, waveBottom, aboutImgFirst } from '../assets';
import { SecondaryHeading, SubHeading, MainText } from '../UI/Typo';
import Button from '../UI/Button';

const AboutStyle = styled.section`
	position: relative;
	height: 100dvh;
	background-color: var(--color-accent-white);
	padding: 0 9%;

	/* 
	&::before,
	&::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 40dvh;
		background-repeat: no-repeat;
		background-position: bottom center;
		background-size: 100%;
	}

	&::before {
		top: -40dvh;
		left: 0;
		background-image: url(${waveTop});
	}

	&::after {
		bottom: -40dvh;
		left: 0;
		background-image: url(${waveBottom});
	} */
`;

function About() {
	return (
		<AboutStyle>
			<SubHeading>Discover Our Culinary Symphony</SubHeading>

			<SecondaryHeading>
				A Harmony of Flavors, Crafted with Passion and Precision
			</SecondaryHeading>
			<MainText>
				Welcome to Flavorscape, where culinary artistry meets a devotion to
				exceptional dining experiences. Our chefs, driven by a passion for
				perfection, meticulously curate each dish to transport you on a journey
				of taste and indulgence. Immerse yourself in an atmosphere that blends
				creativity, warmth, and a commitment to culinary excellence.
			</MainText>
			<Button href="#">Read More &rarr;</Button>
		</AboutStyle>
	);
}

export default About;
