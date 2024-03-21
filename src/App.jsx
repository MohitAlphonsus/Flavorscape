import GlobalStyles from './UI/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Order from './pages/Order';
import OrderDetails from './components/OrderDetails';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="store" element={<Order />} />
					<Route path="store/:id" element={<OrderDetails />} />
				</Routes>
			</BrowserRouter>
			<GlobalStyles />
		</>
	);
}
