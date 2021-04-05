import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css';

const Chart = (props) => {

	const { data, colors, height, dataKey, title, filteredDataKey } = props;

	return (
		<article
			className="container__display-charts">
			<h2>{title}</h2>
			<ResponsiveContainer 
				width="100%" 
				height={height}>
				<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 30,
					right: 30,
					left: 30,
					bottom: 30,
				}}>
				<CartesianGrid 
					strokeDasharray="4 4"/>
				<XAxis 
					dataKey={dataKey[0]}/>
				<YAxis/>
				<Tooltip
					contentStyle={{backgroundColor: '#effffb', color: '#0A090C', border: 'none', textAlign: 'left'}}/>
				<Legend/>
				{
					filteredDataKey.map((el, i) => {
						return (
							<Line 
								type="monotone" 
								dataKey={el} 
								stroke={colors[i]} 
								dot={false}/>
						)
					})
				}
				</LineChart>
			</ResponsiveContainer>
		</article>
	)
};

export default Chart;