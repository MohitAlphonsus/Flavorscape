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

const TertiaryHeading = styled.h2`
	font-size: 3rem;
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
		switch(props.$text) {
			case 'light':
				return css`
					color: var(--color-gray-text);
				`;
		}
	}}
`;

const SmallText = styled.p`
	font-size: 1.6rem;
	line-height: 1.7;
`;

export {
	MainHeading,
	SecondaryHeading,
	TertiaryHeading,
	SubHeading,
	MainText,
	SmallText,
};
