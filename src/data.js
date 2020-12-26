import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
	{
		page: 'Home',
		links: [
			{
				label: 'Health Insurance',
				icon: <FaCreditCard />,
				url: '/HealthQuotes',
			},
			{
				label: 'Medicare Insurance',
				icon: <FaCreditCard />,
				url: '/MedicareQuotes',
			},
			{
				label: 'Life Insurance',
				icon: <FaCreditCard />,
				url: '/LifeQuotes',
			},
		],
	},
	{
		page: 'Get Insurance',
		links: [
			{ label: 'Health', icon: <FaBook />, url: '/HealthQuotes' },
			{ label: 'Medicare', icon: <FaBook />, url: '/MedicareQuotes' },
			{ label: 'Dental', icon: <FaBook />, url: '/DentalQuotes' },
			{ label: 'Life', icon: <FaBook />, url: '/LifeQuotes' },
		],
	},
	{
		page: 'Learn More',
		links: [
			{ label: 'Question', icon: <FaBriefcase />, url: '/LearnMore' },
			{ label: 'Articles', icon: <FaBriefcase />, url: '/Article' },
		],
	},
	{
		page: 'Members',
		links: [{ label: 'Member only', icon: <FaBriefcase />, url: '/AdminUser/Admin' }],
	},
];

export default sublinks;
