import React, { useEffect } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { MedicareColors } from './Color';

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
			data: [200, 78, 189, 293, 373],
			backgroundColor: MedicareColors,
			hoverBackgroundColor: MedicareColors,
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
			backgroundColor: MedicareColors,
			hoverBackgroundColor: MedicareColors,
		},
	],
};

function Graph5() {
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

export default Graph5;
