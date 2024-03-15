import styled, { css } from 'styled-components';
import { QuaternaryHeading, SmallText } from '../UI/Typo';
import { dishDeco } from '../assets';

const DishStyle = styled.div`
	position: relative;
	background-color: var(--color-light-gray);

	border-top-left-radius: 30%;
	border-bottom-right-radius: 30%;
	padding: 8rem 2rem 2rem 2rem;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	margin-top: 6rem;

	&::before {
		position: absolute;
		content: '';
		top: -25%;
		left: 50%;
		transform: translate(-50%, -25%);
		height: calc(100% - 30%);
		width: calc(100% - 30%);
		background: url(${dishDeco}) no-repeat center center/cover;
	}
`;

const Price = styled.span`
	display: inline-block;
	font-size: 3rem;
	color: var(--color-primary);
	margin-top: auto;
`;

const DishImage = styled.div`
	height: 15rem;
	width: 15rem;

	border-radius: 50%;
	position: absolute;
	top: -25%;
	left: 50%;
	transform: translate(-50%, 0);
	${props => css`
		background-image: url(${props.$imgurl});
	`};
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100%;
`;

function Dish({ dishName, ing, price, imgUrl }) {
	return (
		<DishStyle>
			<QuaternaryHeading>{dishName}</QuaternaryHeading>
			<SmallText $text="light">{ing}</SmallText>
			<Price>{price}₹</Price>
			<DishImage role="image" $imgurl={imgUrl}>
				&nbsp;
			</DishImage>
		</DishStyle>
	);
}

export default Dish;
