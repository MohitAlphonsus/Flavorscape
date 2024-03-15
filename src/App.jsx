import GlobalStyles from './UI/GlobalStyles';
import {
	Header,
	About,
	Features,
	Testimonials,
	Footer,
	Booking,
	Gallery,
} from './components';

export default function App() {
	return (
		<>
			<Header />
			<About />
			<Features />
			<Gallery />
			<Testimonials />
			<Booking />
			<Footer />
			<GlobalStyles />
		</>
	);
}
