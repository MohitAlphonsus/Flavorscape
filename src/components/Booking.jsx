import styled from 'styled-components';
import Heading from '../UI/Heading';
import { SubHeading, SecondaryHeading, SmallText } from '../UI/Typo';
import { Form } from '../components';
import ImagePotrait from '../UI/ImagePotrait';
import { formDeco1, formDeco2 } from '../assets';

const BookingStyle = styled.section`
	background-color: var(--color-accent-white-1);
	padding: 6rem 5%;
	position: relative;
`;

function Booking() {
	return (
		<BookingStyle>
			<Heading>
				<SubHeading>Reserve Your Culinary Adventure</SubHeading>
				<SecondaryHeading $secondary="true">
					Secure Your Spot for a Memorable Dining Experience
				</SecondaryHeading>
				<SmallText $text="light">
					Booking a table is just a click away. Simply fill out the form below,
					and our team will take care of the rest.
				</SmallText>
			</Heading>
			<Form />
			<ImagePotrait
				imgSrc={formDeco2}
				imgAlt="green leaf"
				top={0}
				left={0}
				width={40}
			/>
			<ImagePotrait
				imgSrc={formDeco1}
				imgAlt="Pistachio"
				bottom={0}
				right={0}
				width={40}
			/>
		</BookingStyle>
	);
}

export default Booking;
