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
import Navigation from './components/Navigation';

export default function App() {
	return (
		<>
			<Navigation />
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
