import { useParams } from 'react-router-dom';
import { dishes } from '../constants/dishes';

function OrderDetails() {
	const { id } = useParams();
	const dish = dishes[id - 1];
	console.log(dish);

	return <div>OrderDetails</div>;
}

export default OrderDetails;
