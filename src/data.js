import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
	{
		page: 'Home',
		links: [
			{
				label: 'Health Insurance',
				icon: <FaCreditCard />,
				url: 'Home/HealthQuotes',
			},
			{
				label: 'Medicare Insurance',
				icon: <FaCreditCard />,
				url: '/Home/MedicareQuotes',
			},
			{
				label: 'Life Insurance',
				icon: <FaCreditCard />,
				url: '/Home/LifeQuotes',
			},
		],
	},
	{
		page: 'Get Insurance',
		links: [
			{ label: 'Health', icon: <FaBook />, url: '/Home/HealthQuotes' },
			{ label: 'Medicare', icon: <FaBook />, url: '/Home/MedicareQuotes' },
			{ label: 'Dental', icon: <FaBook />, url: '/Home/DentalQuotes' },
			{ label: 'Life', icon: <FaBook />, url: '/Home/LifeQuotes' },
		],
	},
	{
		page: 'Learn More',
		links: [
			{ label: 'Question', icon: <FaBriefcase />, url: '/LearnMore' },
			{ label: 'Articles', icon: <FaBriefcase />, url: '/LearnMore' },
		],
	},
	{
		page: 'Members',
		links: [{ label: 'Member only', icon: <FaBriefcase />, url: '/AdminUser/Admin' }],
	},
];

export default sublinks;
