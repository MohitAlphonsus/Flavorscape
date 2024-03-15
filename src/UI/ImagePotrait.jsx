import styled, { css } from 'styled-components';

const ImagePotraitStyle = styled.img`
	position: absolute;

	${props => css`
		top: ${props.$top};
		left: ${props.$left};
		bottom: ${props.$bottom};
		right: ${props.$right};
		width: ${props.$width}rem;
		opacity: ${props.$opacity};
	`}
`;

function ImagePotrait({
	imgSrc,
	imgAlt,
	bottom,
	right,
	width,
	top,
	left,
	opacity,
}) {
	return (
		<ImagePotraitStyle
			src={imgSrc}
			alt={imgAlt}
			$bottom={bottom}
			$right={right}
			$width={width}
			$top={top}
			$left={left}
			$opacity={opacity}
		/>
	);
}

export default ImagePotrait;
