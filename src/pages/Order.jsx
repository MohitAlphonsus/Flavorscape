import styled from 'styled-components';
import { dishes } from '../constants/dishes';
import Dish from '../components/Dish';

const OrderSection = styled.section`
	height: 100dvh;
`;

const HeaderStyle = styled.header`
	height: 10%;
	width: 100%;
	background-color: var(--color-accent-white);
`;

const DishContainer = styled.div`
	padding: 6rem 5%;
	width: min(95%, 115rem);
	margin: 0 auto;
	height: 90%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 12rem;
	column-gap: 6rem;

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
			<HeaderStyle>Order</HeaderStyle>
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
					/>
				))}
			</DishContainer>
		</OrderSection>
	);
}

export default Order;
