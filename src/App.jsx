import GlobalStyles from './UI/GlobalStyles';
import { Header, About, Features, Testimonials, Footer } from './components';
import Gallery from './components/Gallery';

export default function App() {
	return (
		<>
			<Header />
			<About />
			<Features />
			<Gallery />
			<Testimonials />
			<Footer />
			<GlobalStyles />
		</>
	);
}
