import styled from 'styled-components';
import { dishes } from '../constants/dishes';
import Dish from '../components/Dish';

import { SubHeading, SecondaryHeading } from '../UI/Typo';

const OrderSection = styled.section``;

const HeaderStyle = styled.header`
	position: fixed;
	padding: 2rem 0;
	text-align: center;
	width: 100%;
	background-color: var(--color-accent-white);
	z-index: 10;
`;

const DishContainer = styled.div`
	padding: 15% 5% 5% 5%;
	width: min(95%, 115rem);
	margin: 0 auto;
	height: 90%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 6rem;
	overflow-y: scroll;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		width: min(50%, 100rem);
	}

	@media (max-width: 560px) {
		width: min(80%, 100rem);
	}
`;

function Order() {
	return (
		<OrderSection>
			<HeaderStyle>
				<SubHeading $text="primary-dark">
					Indulge in Culinary Delights
				</SubHeading>
				<SecondaryHeading $secondary="true">
					Explore Our Exquisite Selection of Specialties
				</SecondaryHeading>
			</HeaderStyle>
			<DishContainer>
				{dishes.map(dish => (
					<Dish
						key={dish.id}
						dishName={dish.name}
						ing={dish.ingredients}
						price={dish.price}
						imgUrl={dish.imgUrl}
						btnRequired={true}
						bg={false}
						id={dish.id}
					/>
				))}
			</DishContainer>
		</OrderSection>
	);
}

export default Order;
