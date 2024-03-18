import styled from 'styled-components';
import Heading from '../UI/Heading';
import { SubHeading, SecondaryHeading } from '../UI/Typo';
import { Dish } from '../components';
import { dishes } from '../constants/dishes';
import Button from '../UI/Button';
import { NavLink } from 'react-router-dom';

const SpecialDishesStyle = styled.section`
	padding: 6rem 5%;
	background-color: var(--color-accent-white-1);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
	position: relative;
	z-index: 1;

	& > *:last-child > *:first-child {
		font: inherit;
		color: inherit;
		text-decoration: inherit;
	}
`;

const DishContainer = styled.div`
	width: min(95%, 100rem);
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;

	@media (max-width: 1040px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 10rem;
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		width: min(50%, 100rem);
	}

	@media (max-width: 560px) {
		width: min(80%, 100rem);
	}
`;

function SpecialDishes() {
	return (
		<SpecialDishesStyle>
			<Heading>
				<SubHeading $text="primary-dark">
					Indulge in Culinary Delights
				</SubHeading>
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
							btnRequired={false}
							bg={true}
						/>
					))}
			</DishContainer>

			<Button $varient="secondary">
				<NavLink to="store">Get Your Flavors Delivered!</NavLink>
			</Button>
		</SpecialDishesStyle>
	);
}

export default SpecialDishes;
