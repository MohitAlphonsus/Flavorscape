import styled from 'styled-components';
import Button from '../UI/Button';
import { aboutImgSecond } from '../assets';

const FormStyle = styled.form`
	position: relative;
	z-index: 2;
	margin: 0 auto;
	padding: 6rem 4rem;
	border-radius: 9px;
	width: min(55%, 75rem);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	box-shadow: 0 1rem 2rem 2rem rgba(0, 0, 0, 0.1);
	/* background-color: var(--color-accent-white-1); */
	background: linear-gradient(
			to right bottom,
			rgba(0, 0, 0, 0.8),
			rgba(0, 0, 0, 0.8)
		),
		url(${aboutImgSecond});

	& > *:last-child {
		grid-column: 1 / 3;
	}

	@media (max-width: 1040px) {
		width: min(100%, 75rem);
	}

	@media (max-width: 560px) {
		grid-template-columns: 1fr;

		& > * {
			grid-column: 1 / 3;
		}
	}
`;

const InputStyle = styled.input`
	padding: 1.8rem;
	border: 1px solid var(--color-primary-light);
	width: 100%;
	border-radius: 3px;
	font-size: 1.6rem;

	&:first-child {
		grid-column: 1 / 3;
	}
`;

function Form() {
	return (
		<FormStyle onClick={e => e.preventDefault()}>
			<InputStyle type="text" placeholder="Name" />
			<InputStyle type="number" placeholder="Your Phone No" />
			<InputStyle type="date" placeholder="mm/dd/yyyy" />
			<InputStyle type="time" placeholder="Choose your time" />
			<InputStyle type="number" placeholder="No. of Guest" />
			<Button> Reserve Your Culinary Journey Now!</Button>
		</FormStyle>
	);
}

export default Form;
