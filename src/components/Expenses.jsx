import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';
import ExpenseFilter from './ExpenseFilter';
import Chart from './Chart';

function Expenses(props) {
	const [filteredYear, setFilterYear] = useState('2020');

	const onFilter = (year) => {
		setFilterYear(year);
	};

	const filteredExpenses = props.ExpenseData.filter((expense) => {
		return (
			filteredYear ===
			expense.date.toLocaleString('en-US', { year: 'numeric' })
		);
	});
	return (
		<Wrapper>
			<Container>
				<ExpenseFilter onFilter={onFilter} />
				<Chart filteredList={filteredExpenses} />
				{filteredExpenses.length === 0 ? (
					<h1>No data found</h1>
				) : (
					filteredExpenses.map((item) => {
						return (
							<ExpenseItem
								date={item.date}
								title={item.title}
								cost={item.cost}
							/>
						);
					})
				)}
			</Container>
		</Wrapper>
	);
}

export default Expenses;

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	background-color: black;
	color: white;
	width: 60%;
	margin: 20px;
	padding: 15px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;
