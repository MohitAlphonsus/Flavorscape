import styled from 'styled-components';
import { logo } from '../assets';
import { SmallText, TertiaryHeading } from '../UI/Typo';
import SocialIcon from './SocialIcon';
import { footerData, footerIcon } from '../constants/footerData';

const FooterStyle = styled.footer`
	background-color: var(--color-secondary);
	color: var(--color-accent-white);
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4rem;
	padding: 6rem 5%;

	@media (max-width: 1040px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 560px) {
		grid-template-columns: 1fr;
	}
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;

	& > *:first-child {
		margin-bottom: 2rem;
	}

	@media (max-width: 560px) {
		gap: 1.6rem;
		& > *:first-child {
			margin-bottom: 0;
		}
	}
`;

const Logo = styled.div`
	width: 20rem;

	img {
		width: 100%;
	}
`;

const SocialIcons = styled.ul`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const OpeningTime = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	li {
		font-size: 1.6rem;
		letter-spacing: 1px;
	}
`;

const AddressStyle = styled.address`
	font-style: normal;
	font-size: 1.6rem;

	span {
		display: block;
		line-height: 1.7;
	}

	span:first-child {
		color: var(--color-primary-light);
		font-weight: 600;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: -1rem;
			transform: translate(0, -50%);
			height: 0.5rem;
			width: 0.5rem;
			border-radius: 50%;
			background-color: currentColor;
		}
	}

	&:last-child span:last-child {
		font-size: 2.5rem;
		color: var(--color-primary-light);
	}
`;

const FormInput = styled.div`
	position: relative;
	input {
		width: 100%;
		padding: 1.6rem;
	}

	& > *:last-child {
		position: absolute;
		top: 2px;
		right: 2px;
		border: none;
		padding: 0.4rem 1rem;
		background-color: var(--color-primary-light);
		color: var(--color-accent-white);
		font-size: 3rem;
		cursor: pointer;
		transition: all 0.2s ease-in;

		&:hover {
			background-color: var(--color-secondary);
			color: var(--color-primary-light);
		}
	}
`;

const { beingPoetic, openingTime, location, newsLetter } = footerData;
const { title, text, icon: Icon } = newsLetter;

function Footer() {
	return (
		<FooterStyle>
			<Box>
				<Logo>
					<img src={logo} alt="logo" />
				</Logo>
				<SmallText>{beingPoetic}</SmallText>
				<SocialIcons>
					{footerIcon.map(icon => (
						<SocialIcon key={icon.id} Icon={icon.icon} />
					))}
				</SocialIcons>
			</Box>

			<Box>
				<TertiaryHeading>{openingTime.title}</TertiaryHeading>
				<OpeningTime>
					<li>{openingTime.daily}</li>
					<li>{openingTime.weekend}</li>
					<li>{openingTime.sunday}</li>
					<li>{openingTime.onHoliday}</li>
					<li>{openingTime.happyHours}</li>
				</OpeningTime>
			</Box>

			<Box>
				<TertiaryHeading>{location.title}</TertiaryHeading>
				<AddressStyle>
					<span>{location.address.title}</span>
					<span>{location.address.addr}</span>
				</AddressStyle>
				<AddressStyle>
					<span>{location.contact.title}</span>
					<span>{location.contact.mail}</span>
					<span>{location.contact.phone}</span>
				</AddressStyle>
			</Box>

			<Box>
				<TertiaryHeading>{title}</TertiaryHeading>
				<SmallText>{text}</SmallText>
				<FormInput>
					<input type="email" placeholder="Enter yout email" />
					<button>
						<Icon />
					</button>
				</FormInput>
			</Box>
		</FooterStyle>
	);
}

export default Footer;
