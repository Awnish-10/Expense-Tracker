import React from 'react';
import styled from 'styled-components';

function ExpenseItem(props) {
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.toLocaleString('en-US', { year: 'numeric' });
	return (
		<Wrapper>
			<Date>
				<h2>{month}</h2>
				<h3>{year}</h3>
				<h1>{day}</h1>
			</Date>
			<Item>{props.title}</Item>
			<Cost>{props.cost}</Cost>
		</Wrapper>
	);
}

export default ExpenseItem;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #3f3f3f;
	border-radius: 10px;
	margin: 10px;
`;

const Date = styled.div`
	flex: 1;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px solid white;
	color: white;
	background-color: black;
	padding: 0.2px 10px;
	border-radius: 10px;

	h1 {
		margin: 2px;
		font-size: 20px;
		font-weight: 400;
	}
	h2 {
		margin: 2px;
		font-size: 16px;
		font-weight: 400;
	}
	h3 {
		margin: 2px;
		font-size: 10px;
		font-weight: 200;
	}
`;

const Item = styled.div`
	flex: 6;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: white;
	font-weight: 600;
`;

const Cost = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid white;
	color: white;
	font-weight: 600;
	background-color: #7027a0;
	padding: 5px 10px;
	border-radius: 10px;
	margin: 10px;
`;
