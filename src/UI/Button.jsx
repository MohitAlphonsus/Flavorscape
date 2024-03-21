import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
	border: none;
	background: none;
	font-size: 1.8rem;
	letter-spacing: 1px;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.2s ease-in;
	${props => {
		switch (props.$margintop) {
			case 'small':
				return css`
					margin-top: 2rem;
				`;
		}
	}};
`;

const ButtonPrimary = styled(ButtonStyle)`
	--background: var(--color-primary-light);
	--currentColor: var(--background);
	--text-color: var(--color-secondary);
	background-color: var(--color-accent-white);
	color: var(--text-color);

	${props => {
		switch (props.$varient) {
			case 'secondary':
				return css`
					--background: transparent;
					--currentColor: var(--background);
					--text-color: var(--color-accent-white);
					background-color: transparent;
					border: 1px solid var(--color-secondary);
					color: var(--color-secondary);
					border-radius: 3px;
				`;
		}
	}}

	padding: 1.8rem 3rem;
	position: relative;
	transition: all 0.2s ease-in;
	overflow-x: clip;

	z-index: -1;

	&::before {
		position: absolute;
		content: '';
		top: 0;
		left: -5rem;
		width: calc(100% + 10rem);
		height: 100%;
		transform: skewX(-45deg);
		z-index: -2;
		transition: all 0.2s ease-in;
		background-color: var(--background);

		${props => {
			switch (props.$varient) {
				case 'secondary':
					return css`
						background-color: var(--color-secondary);
						width: 0;
					`;
			}
		}}
	}

	&::after {
		position: absolute;
		content: '';
		left: 0;
		bottom: -1rem;
		height: 1px;
		width: 100%;
		background-color: var(--background);
		transition: all 0.2s ease-in;

		${props => {
			switch (props.$varient) {
				case 'secondary':
					return css`
						background-color: var(--color-secondary);
						border-radius: 3px;
					`;
			}
		}}
	}

	&:hover {
		color: var(--color-primary);
		${props => {
			switch (props.$varient) {
				case 'secondary':
					return css`
						color: var(--color-accent-white);
					`;
			}
		}}
	}

	&:hover::before {
		width: 0;

		${props => {
			switch (props.$varient) {
				case 'secondary':
					return css`
						width: calc(100% + 10rem);
					`;
			}
		}}
	}

	&:hover::after {
		bottom: 0;
		border-bottom: 0;
	}
`;

const ButtonLink = styled(ButtonStyle)`
	border-bottom: 1px solid currentColor;
	padding-bottom: 0.5rem;

	&:hover {
		letter-spacing: 2px;
	}
`;

function Button({ children, href, $margintop, $varient, isLink }) {
	if (isLink || href) return <ButtonLink>{children}</ButtonLink>;

	return (
		<ButtonPrimary $margintop={$margintop} $varient={$varient}>
			{children}
		</ButtonPrimary>
	);
}

export default Button;
