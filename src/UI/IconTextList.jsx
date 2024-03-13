import styled from 'styled-components';
import { MainText } from './Typo';

const KeyPoint = styled.li`
	display: flex;
	align-items: center;
	gap: 1rem;

	& > *:not(:last-child) {
		font-size: 2rem;
	}
`;

function IconTextList({ Icon, text }) {
	return (
		<KeyPoint>
			<Icon />
			<MainText>{text}</MainText>
		</KeyPoint>
	);
}

export default IconTextList;
