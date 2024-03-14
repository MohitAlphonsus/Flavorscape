import styled, { css } from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa6';
import { MainText } from '../UI/Typo';

const TestimonialStyle = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	flex-direction: column;
	gap: 2rem;

	color: var(--color-accent-white);
	padding: 2rem 4rem;
	border-radius: 9px;

	& > *:first-child {
		font-size: 6rem;
		color: var(--color-gray-text);
	}
`;

const Customer = styled.div`
	display: grid;
	align-items: center;
	column-gap: 1rem;
	grid-template-columns: min-content 1fr;

	div {
		grid-row: 1 / -3;
		height: 6rem;
		width: 6rem;
		border-radius: 50%;
		${props => css`
			background: url(${props.$customerphoto}) no-repeat center center/cover;
		`}
	}

	p {
		font-size: 1.4rem;
		text-align: left;
	}

	span {
		display: inline-block;
		font-size: 1.2rem;
		font-style: italic;
		opacity: 0.9;
		grid-column: 2 / -1;
	}
`;

function Testimonial({
	customerName,
	dishName,
	testimonialText,
	customerphoto,
}) {
	return (
		<swiper-slide>
			<TestimonialStyle>
				<FaQuoteLeft />
				<MainText>{testimonialText}</MainText>
				<Customer $customerphoto={customerphoto}>
					<div role="image">&nbsp;</div>
					<p>{customerName}</p>
					<span>(Review for {dishName})</span>
				</Customer>
			</TestimonialStyle>
		</swiper-slide>
	);
}

export default Testimonial;
