import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarColors } from './Color';

const state = {
	labels: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	datasets: [
		{
			label: 'Leads',
			backgroundColor: BarColors,
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			width: 18,
			data: [65, 79, 80, 81, 86, 87, 90, 80, 84, 92, 93, 95],
		},
	],
};

export default class App extends React.Component {
	render() {
		return (
			<div className="graph-styling">
				<Bar
					width={200}
					height={80}
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average Leads per month',
							fontSize: 20,
						},
						legend: {
							display: true,
							position: 'top',
						},
					}}
				/>
			</div>
		);
	}
}
