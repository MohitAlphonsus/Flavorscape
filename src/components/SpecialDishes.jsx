import styled from 'styled-components';
import Heading from '../UI/Heading';
import { SubHeading, SecondaryHeading } from '../UI/Typo';
import { Dish } from '../components';
import { dishes } from '../constants/dishes';
import Button from '../UI/Button';

const SpecialDishesStyle = styled.section`
	padding: 6rem 5%;
	background-color: var(--color-accent-white-1);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
`;

const DishContainer = styled.div`
	width: min(95%, 100rem);
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
`;

function SpecialDishes() {
	return (
		<SpecialDishesStyle>
			<Heading>
				<SubHeading>Indulge in Culinary Delights</SubHeading>
				<SecondaryHeading $secondary="true">
					Explore Our Exquisite Selection of Specialties
				</SecondaryHeading>
			</Heading>
			<DishContainer>
				{dishes
					.filter((_, index) => index < 3)
					.map(dish => (
						<Dish
							key={dish.id}
							dishName={dish.name}
							ing={dish.ingredients}
							price={dish.price}
							imgUrl={dish.imgUrl}
						/>
					))}
			</DishContainer>
			<Button>Get Your Flavors Delivered!</Button>
		</SpecialDishesStyle>
	);
}

export default SpecialDishes;
