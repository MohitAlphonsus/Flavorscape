import styled from 'styled-components';

import { Testimonial } from '../components';
import { SecondaryHeading, SubHeading } from '../UI/Typo';
import Heading from '../UI/Heading';

import { testimonialBg } from '../assets';
import { testimonialData } from '../constants/testimonialData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
	width: min(95%, 120rem);

	& > *:first-child {
		width: 100%;
		height: 100%;
	}
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
				<Swiper
					spaceBetween={30}
					loop={true}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					modules={[Autoplay]}
				>
					{testimonialData.map(data => (
						<SwiperSlide key={data.id}>
							<Testimonial
								customerName={data.customerName}
								dishName={data.dish}
								testimonialText={data.testimonial}
								customerphoto={data.customerPhoto}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</TestimonialContainer>
		</TestimonialsStyle>
	);
}

export default Testimonials;
