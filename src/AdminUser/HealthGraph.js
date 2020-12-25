import React, { useEffect } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { HealthColors } from './Color';

const options = {
	legend: {
		display: false,
		position: 'right',
	},
	elements: {
		arc: {
			borderWidth: 0,
		},
	},
};

const pieOptions = {
	legend: {
		display: false,
		position: 'right',
		legendCallback: function (chart) {
			// Return the HTML string here.
			console.log(chart);
			return [];
		},
	},
	elements: {
		arc: {
			borderWidth: 1,
			borderAlign: 'center',
		},
	},
};

const data = {
	maintainAspectRatio: false,
	responsive: false,
	labels: ['a', 'b', 'c', 'd'],
	datasets: [
		{
			data: [130, 50, 100, 50, 38],
			backgroundColor: HealthColors,
			hoverBackgroundColor: HealthColors,
		},
	],
};

const pieData = {
	maintainAspectRatio: false,
	responsive: false,
	labels: ['usa', 'europe', 'africa'],
	datasets: [
		{
			data: [130, 150, 20, 10, 45],
			backgroundColor: HealthColors,
			hoverBackgroundColor: HealthColors,
		},
	],
};

function Graph2() {
	let chartInstance = null;

	return (
		<div className="App">
			<div style={styles.relative}>
				<div style={styles.pieContainer}>
					<Pie
						data={data}
						options={pieOptions}
						ref={(input) => {
							chartInstance = input;
						}}
					/>
				</div>
				<div id="legend" />
			</div>
		</div>
	);
}

const styles = {
	pieContainer: {
		width: '70%',
		height: '90%',
		top: '50%',
		left: '50%',
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
	},
	relative: {
		// position: "relative",
	},
};

export default Graph2;
