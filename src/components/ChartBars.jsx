import React from 'react';
import styled from 'styled-components';

function ChartBars(props) {
	const chartValues = props.chartData.map((element) => {
		return element.value;
	});
	// console.log(chartValues);
	const max = Math.max(...chartValues);
	return (
		<Container>
			{props.chartData.map((element) => {
				return (
					<Bar>
						<InnerBar height={(element.value / max) * 100}></InnerBar>
					</Bar>
				);
			})}
		</Container>
	);
}

export default ChartBars;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 5px;
	border: solid black 5px;
`;

const Bar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 150px;
	width: 15px;
	margin: 20px 0;
	border-radius: 10px;
	border: solid black 2px;
`;

const InnerBar = styled.div`
	background-color: #113cfc;
	height: ${(props) => `${props.height}%`};
	border-radius: 10px;
	width: 100%;
`;
