import GlobalStyles from './UI/GlobalStyles';
import Home from './pages/Home';
import Order from './pages/Order';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Order />} />
				</Routes>
			</BrowserRouter>
			<GlobalStyles />
		</>
	);
}
