import React from 'react';
import ChartBars from './ChartBars';
import styled from 'styled-components';

function Chart(props) {
	const chartData = [
		{ value: 0, month: 'Jan' },
		{ value: 0, month: 'Feb' },
		{ value: 0, month: 'Mar' },
		{ value: 0, month: 'Apr' },
		{ value: 0, month: 'May' },
		{ value: 0, month: 'Jun' },
		{ value: 0, month: 'Jul' },
		{ value: 0, month: 'Aug' },
		{ value: 0, month: 'Sep' },
		{ value: 0, month: 'Oct' },
		{ value: 0, month: 'Nov' },
		{ value: 0, month: 'Dec' },
	];
	props.filteredList.forEach((element) => {
		const month = element.date.getMonth();
		chartData[month].value += element.cost;
		console.log(chartData[month].value);
	});
	return (
		<Container itemCount={props.filteredList.length}>
			<ChartBars chartData={chartData} />
		</Container>
	);
}

export default Chart;

const Container = styled.div`
	width: 100%;
	background-color: #ffdefa;
	border-radius: 30px;
	display: ${(props) => `${props.itemCount === 0 ? 'none' : 'initial'}`};
`;
