import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import styled from 'styled-components';
const ExpenseData = [
	{
		date: new Date(2020, 7, 14),
		title: 'Toilet Papper',
		cost: 99,
	},
	{
		date: new Date(2021, 2, 12),
		title: 'New TV',
		cost: 49999,
	},
	{
		date: new Date(2022, 2, 28),
		title: 'CAr Insurance',
		cost: 6000,
	},
	{
		date: new Date(2021, 5, 12),
		title: 'New Desk',
		cost: 3000,
	},
];
function App() {
	const [data, setData] = useState([...ExpenseData]);
	const addData = (expenseItem) => {
		setData((prevValue) => {
			return [expenseItem, ...prevValue];
		});
	};
	return (
		<Wrapper>
			<NewExpense addData={addData} />
			<Expenses ExpenseData={data} />
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`;
