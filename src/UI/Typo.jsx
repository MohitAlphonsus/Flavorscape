import styled, { css } from 'styled-components';

const MainHeading = styled.h1`
	font-size: 6rem;
`;

const SecondaryHeading = styled.h2`
	font-size: 5rem;
	${props => {
		switch (props.$secondary) {
			case 'true':
				return css`
					color: var(--color-secondary);
				`;
		}
	}};
`;

const TertiaryHeading = styled.h3`
	font-size: 3rem;
	font-weight: 400;
	${props => {
		switch (props.$secondary) {
			case 'true':
				return css`
					color: var(--color-secondary);
				`;
		}
	}};
`;

const QuaternaryHeading = styled.h4`
	font-size: 2.5rem;
	font-weight: 500;
`;

const SubHeading = styled.p`
	font-size: 1.6rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: var(--color-primary);
`;

const MainText = styled.p`
	font-size: 1.8rem;
	line-height: 1.7;
	${props => {
		switch (props.$text) {
			case 'light':
				return css`
					color: var(--color-gray-text);
				`;
		}
	}}
`;

const SmallText = styled.p`
	font-size: 1.6rem;
	line-height: 1.8;
	${props => {
		switch (props.$text) {
			case 'light':
				return css`
					color: var(--color-gray-text);
				`;
		}
	}}
`;

export {
	MainHeading,
	SecondaryHeading,
	TertiaryHeading,
	QuaternaryHeading,
	SubHeading,
	MainText,
	SmallText,
};
