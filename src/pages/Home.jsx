import {
	Header,
	About,
	Features,
	Testimonials,
	Footer,
	Booking,
	Gallery,
	SpecialDishes,
} from '../components';

function Home() {
	return (
		<>
			<Header />
			<About />
			<Features />
			<SpecialDishes />
			<Gallery />
			<Testimonials />
			<Booking />
			<Footer />
		</>
	);
}

export default Home;
