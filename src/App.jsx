import GlobalStyles from './UI/GlobalStyles';
import { Header, About } from './components';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

export default function App() {
	return (
		<>
			<Header />
			<About />
			<Testimonials />
			<Footer />
			<GlobalStyles />
		</>
	);
}
