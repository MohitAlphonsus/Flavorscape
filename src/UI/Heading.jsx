import styled from 'styled-components';

const HeadingBox = styled.div`
	position: relative;
	z-index: 2;
	text-align: center;
	margin-bottom: 6rem;
`;

function Heading({ children }) {
	return <HeadingBox>{children}</HeadingBox>;
}

export default Heading;
