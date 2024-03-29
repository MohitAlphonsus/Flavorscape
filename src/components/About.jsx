import styled from 'styled-components';

import { aboutImgFirst, chefPotrait } from '../assets';
import { SecondaryHeading, SubHeading, MainText } from '../UI/Typo';
import Button from '../UI/Button';
import keyPoints from '../constants/keyPoints';
import IconTextList from './IconTextList';
import ImagePotrait from '../UI/ImagePotrait';

const AboutStyle = styled.section`
	position: relative;
	background-color: var(--color-accent-white-1);
	padding: 6rem 9%;

	@media (max-width: 1040px) {
		padding: 6rem 5%;
	}
`;

const AboutBox = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 3rem 1fr 3rem;

	@media (max-width: 1040px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		gap: 1rem;
	}
`;

const TextBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-self: start;
	align-items: start;
	gap: 2rem;
	box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
	grid-row: 2 / 3;
	padding: 4rem 0 4rem 4rem;

	&::after {
		position: absolute;
		content: '';
		top: 0;
		right: -5%;
		height: 100%;
		width: calc(100% - 95%);
		background-color: var(--color-accent-white-1);
		z-index: 1;
	}
`;

const ImageBox = styled.div`
	position: relative;
	overflow: hidden;
	background: url(${aboutImgFirst}) no-repeat center center/cover;
	grid-column: 2 / -1;
	grid-row: 1 / -1;

	@media (max-width: 1040px) {
		grid-column: auto;
		grid-row: auto;
		height: 40rem;
	}

	&::before {
		position: absolute;
		content: '';
		right: 0;
		top: 0;
		width: calc(100% - 60%);
		height: 100%;

		border: 2rem solid var(--color-accent-white-1);
	}
`;

const KeyPoints = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	list-style-type: none;
	margin-top: 6rem;
`;

function About() {
	return (
		<AboutStyle id="#about">
			<AboutBox>
				<TextBox>
					<SubHeading $text="primary-dark">
						Discover Our Culinary Symphony
					</SubHeading>
					<SecondaryHeading $secondary="true">
						A Harmony of Flavors, Crafted with Passion and Precision
					</SecondaryHeading>
					<MainText $text="light">
						Welcome to Flavorscape, where culinary artistry meets a devotion to
						exceptional dining experiences. Our chefs, driven by a passion for
						perfection, meticulously curate each dish to transport you on a
						journey of taste and indulgence. Immerse yourself in an atmosphere
						that blends creativity, warmth, and a commitment to culinary
						excellence.
					</MainText>
					<Button href="#">Read More &rarr;</Button>
				</TextBox>
				<ImageBox role="image">&nbsp;</ImageBox>
			</AboutBox>
			<KeyPoints>
				{keyPoints.map(point => (
					<IconTextList
						key={point.id}
						Icon={point.icon}
						text={point.pointText}
					/>
				))}
			</KeyPoints>
			<ImagePotrait
				imgSrc={chefPotrait}
				imgAlt="cartoony potrait of chef"
				bottom={0}
				right={0}
				width={20}
				opacity={0.2}
			/>
		</AboutStyle>
	);
}

export default About;
