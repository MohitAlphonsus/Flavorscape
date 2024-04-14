import styled from 'styled-components';
import { heroImg } from '../assets';
import { MainHeading, SubHeading } from '../UI/Typo';
import Button from '../UI/Button';
import Wave from '../UI/Wave';

const HeaderStyle = styled.header`
	position: relative;
	height: 100dvh;
	background: linear-gradient(
			to right bottom,
			rgba(0, 0, 0, 0.8),
			rgba(0, 0, 0, 0.8)
		),
		url(${heroImg}) no-repeat center center/cover;

	@media (max-width: 60em) {
		height: 120dvh;
	}

	@media (max-width: 560px) {
		height: 100dvh;
	}
`;

const TextBox = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -40%);

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;

	color: var(--color-accent-white);

	@media (max-width: 1040px) {
		width: 70%;
	}

	@media (max-width: 700px) {
		width: 80%;
	}
`;

function Header() {
	return (
		<HeaderStyle>
			<TextBox>
				<SubHeading $text="primary-light">
					Savor the Art of Culinary Craftsmanship
				</SubHeading>
				<MainHeading>
					Indulge in Exquisite Flavors, Where Passion Meets Palate
				</MainHeading>
				<Button $margintop="small">Reserve Your Culinary Journey Now!</Button>
			</TextBox>
			<Wave />
		</HeaderStyle>
	);
}

export default Header;
