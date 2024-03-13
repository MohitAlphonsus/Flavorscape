import {
	FaFacebookF,
	FaXTwitter,
	FaEnvelope,
	FaInstagram,
} from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';

const footerData = {
	beingPoetic:
		'Here, every dish tells a story, every sip a journey, as we craft moments that linger long after the plates are cleared. Join us in our culinary symphony, where passion meets palate, and every bite is a revelation.',

	openingTime: {
		title: 'Opening Time',
		daily: 'Mon - Fri : 9:00am - 10:00pm',
		weekend: 'Sat : 10:00am - 11:00pm',
		sunday: 'Sun : 5:00pm - 11:00pm',
		onHoliday: 'Holidays : Closed',
		happyHours: 'Happy Hours : 6:00pm - 9:00pm',
	},

	location: {
		title: 'Location',
		address: {
			title: 'Address',
			addr: '4517 Washington Ave. Manchester, Kentucky 39495, USA',
		},
		contact: {
			title: 'Contact',
			mail: 'Basilicofood123@gmail.com',
			phone: '978-212-8600',
		},
	},

	newsLetter: {
		title: 'Subscribe Newsletter',
		text: 'Subscribe to our newsletter to get regular update about offers !!',
		icon: IoIosSend,
	},
};

const footerIcon = [
	{
		id: 1,
		icon: FaFacebookF,
	},
	{
		id: 2,
		icon: FaXTwitter,
	},
	{
		id: 3,
		icon: FaEnvelope,
	},
	{
		id: 4,
		icon: FaInstagram,
	},
];

export { footerData, footerIcon };
