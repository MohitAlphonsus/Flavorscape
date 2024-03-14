import styled, { css } from 'styled-components';

const PictureStyle = styled.picture`
	overflow: hidden;
	${props => css`
		grid-row: ${props.$gridrow};
		grid-column: ${props.$gridcolumn};
	`}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

function Picture({ imgSrc, gridRow, gridColumn }) {
	return (
		<PictureStyle $gridrow={gridRow} $gridcolumn={gridColumn}>
			<img src={imgSrc} alt="Food Image" />
		</PictureStyle>
	);
}

export default Picture;
