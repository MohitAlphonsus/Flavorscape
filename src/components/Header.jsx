import styled from 'styled-components';
import { heroImg, logo } from '../assets';
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
	top: 35%;
	left: 50%;
	transform: translate(-50%, -40%);
	width: 100rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	color: var(--color-accent-white);

	img {
		width: 35rem;
		margin-bottom: 5rem;
	}

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
				<img src={logo} alt="logo" />
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
