import styled from 'styled-components';
import Heading from '../UI/Heading';
import { SubHeading, SecondaryHeading, MainText } from '../UI/Typo';
import { gallery } from '../constants/gallery';
import Picture from './Picture';

const GalleryStyles = styled.section`
	padding: 6rem 5%;
`;

const GalleryContainer = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(6, 1fr);
	gap: 1rem;
`;

function Gallery() {
	return (
		<GalleryStyles id="gallery">
			<Heading>
				<SubHeading $text="primary-dark">
					{' '}
					Savor Our Culinary Creations
				</SubHeading>
				<SecondaryHeading $secondary="true">
					Feast Your Eyes on Our Exquisite Dishes
				</SecondaryHeading>
				<MainText $text="light">
					Explore a visual symphony of flavors with our dishes gallery.
				</MainText>
			</Heading>
			<GalleryContainer>
				{gallery.map(gall => (
					<Picture
						key={gall.id}
						imgSrc={gall.imgSrc}
						gridRow={gall.gridRow}
						gridColumn={gall.gridColumn}
					/>
				))}
			</GalleryContainer>
		</GalleryStyles>
	);
}

export default Gallery;
