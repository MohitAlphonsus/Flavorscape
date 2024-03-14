import styled from 'styled-components';

import { Testimonial } from '../components';
import { SecondaryHeading, SubHeading } from '../UI/Typo';
import Heading from '../UI/Heading';

import { testimonialBg } from '../assets';
import { testimonialData } from '../constants/testimonialData';

const TestimonialsStyle = styled.section`
	background-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		),
		url(${testimonialBg});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 6rem 2rem;
	color: var(--color-accent-white);
`;

const TestimonialContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	width: min(95%, 120rem);
`;

function Testimonials() {
	return (
		<TestimonialsStyle>
			<Heading>
				<SubHeading>Rave Reviews from Our Esteemed Guests</SubHeading>
				<SecondaryHeading>
					Discover What Our Customers Have to Say About Their Culinary
					Experience
				</SecondaryHeading>
			</Heading>
			<TestimonialContainer>
				{testimonialData.map(data => (
					<Testimonial
						key={data.id}
						customerName={data.customerName}
						dishName={data.dish}
						testimonialText={data.testimonial}
						customerphoto={data.customerPhoto}
					/>
				))}
			</TestimonialContainer>
		</TestimonialsStyle>
	);
}

export default Testimonials;
