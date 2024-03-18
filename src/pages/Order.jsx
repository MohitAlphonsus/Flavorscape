import styled from 'styled-components';

const OrderSection = styled.section``;

const HeaderStyle = styled.header`
	height: 10dvh;
	width: 100%;
	background-color: var(--color-accent-white);
`;

const DishContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

function Order() {
	return (
		<OrderSection>
			<HeaderStyle></HeaderStyle>
			<DishContainer></DishContainer>
		</OrderSection>
	);
}

export default Order;
