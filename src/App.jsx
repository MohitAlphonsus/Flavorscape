import GlobalStyles from './UI/GlobalStyles';
import {
	Header,
	About,
	Features,
	Testimonials,
	Footer,
	Booking,
	Gallery,
	SpecialDishes,
} from './components';

export default function App() {
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
			<GlobalStyles />
		</>
	);
}
