import styled, { css } from 'styled-components';
import { QuaternaryHeading, SmallText } from '../UI/Typo';
import { dishDeco } from '../assets';
import Button from '../UI/Button';

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

	& > *:last-child > *:first-child {
		font: inherit;
		text-decoration: inherit;
		color: inherit;
	}

	&::before {
		position: absolute;
		content: '';
		top: -25%;
		left: 50%;
		transform: translate(-50%, -25%);
		height: calc(100% - 30%);
		width: calc(100% - 30%);
		${props =>
			props.$bg
				? css`
						background: url(${dishDeco}) no-repeat center center/cover;
				  `
				: css`
						background-color: var(--color-primary-light);
						height: 100%;
						/* height: calc(100% - 90%); */
						clip-path: circle(50% at 50% 50%);
						top: -5%;
						z-index: -1;
				  `}
	}

	@media (max-width: 1040px) {
		&::before {
			height: calc(100% - 20%);
			width: calc(100% - 50%);
		}
	}

	@media (max-width: 960px) {
		&::before {
			height: calc(100% - 40%);
			width: calc(100% - 40%);
		}
	}

	@media (max-width: 700px) {
		padding: 10rem 4rem 4rem 4rem;

		&::before {
			height: calc(100% - 40%);
			width: calc(100% - 10%);
		}
	}

	@media (max-width: 560px) {
		padding: 8rem 2rem 2rem 2rem;

		&::before {
			height: 100%;
			width: calc(100% - 30%);
			z-index: -1;
		}
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

function Dish({ dishName, ing, price, imgUrl, btnRequired, bg, id }) {
	return (
		<DishStyle $bg={bg}>
			<QuaternaryHeading>{dishName}</QuaternaryHeading>
			<SmallText $text="light">{ing}</SmallText>
			<Price>{price}₹</Price>
			<DishImage role="image" $imgurl={imgUrl}>
				&nbsp;
			</DishImage>

			{btnRequired && <Button isLink={true}>Order</Button>}
		</DishStyle>
	);
}

export default Dish;
