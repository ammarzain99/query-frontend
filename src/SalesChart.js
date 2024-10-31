import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const SalesChart = () => {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:5000/api/sales-data');
			// const data = response.data;
			setChartData(response.data);
		} catch (error) {
			console.error("Error fetching data", error);
		}
	};

	fetchData();
	}, []);

	if (!chartData) return <p>Loading...</p>;

	return (
	<div>
		<h2>Sales Chart</h2>
		<BarChart width={600} height={400} data={chartData}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="month" />
			<YAxis />
			<Tooltip />
			<Bar dataKey="total_sales" fill="#82ca9d" />
		</BarChart>
	</div>
	);
};

export default SalesChart;
