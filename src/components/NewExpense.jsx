import React, { useState } from 'react';
import styled from 'styled-components';

function NewExpense(props) {
	const [addButton, setAddButton] = useState(true);
	const [state, setState] = useState({
		title: '',
		cost: '',
		date: '',
	});

	const titleHandler = (event) => {
		setState((prevValue) => {
			return {
				...prevValue,
				title: event.target.value,
			};
		});
	};
	const amountHandler = (event) => {
		// console.log(typeof event.target.value);
		setState((prevValue) => {
			return {
				...prevValue,
				cost: parseInt(event.target.value),
			};
		});
	};
	const dateHandler = (event) => {
		setState((prevValue) => {
			return {
				...prevValue,
				date: event.target.value,
			};
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		props.addData({
			title: state.title,
			cost: state.cost,
			date: new Date(state.date),
		});
		setState((prevValue) => {
			return {
				title: '',
				cost: '',
				date: '',
			};
		});

		addButtonHandler();
	};
	const addButtonHandler = () => {
		setAddButton((prevValue) => {
			return !prevValue;
		});
	};
	if (addButton) {
		return (
			<Wrapper>
				<BtnContainer>
					<Button onClick={addButtonHandler}>Add New Expense</Button>
				</BtnContainer>
			</Wrapper>
		);
	} else
		return (
			<Wrapper>
				<Container onSubmit={submitHandler}>
					<InputItem>
						<label>Title</label>
						<input
							onChange={titleHandler}
							type='text'
							value={state.title}
						/>
					</InputItem>
					<InputItem>
						<label>Amount</label>
						<input
							onChange={amountHandler}
							type='number'
							value={state.cost}
						/>
					</InputItem>
					<InputItem>
						<label>Date</label>
						<input
							onChange={dateHandler}
							type='date'
							value={state.date}
						/>
					</InputItem>
					<div>
						<Button type='submit'>Add Expense</Button>
					</div>
				</Container>
			</Wrapper>
		);
}

export default NewExpense;

const BtnContainer = styled.div`
	width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffdefa;
	border-radius: 20px;
	padding: 20px 0;
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px 0;
	padding: 10px 0;
`;

const Container = styled.form`
	width: 60%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	background-color: #ffdefa;
	border-radius: 20px;
	div {
		width: 400px;
		display: flex;
		justify-content: flex-end;
	}
`;

const InputItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
	input {
		font-size: 20px;
		width: 400px;
		border-radius: 5px;
		border: none;
		outline: none;
	}
`;

const Button = styled.button`
	padding: 10px 20px;
	background-color: #193498;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
`;
