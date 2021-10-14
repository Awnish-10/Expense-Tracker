import React from 'react';
import styled from 'styled-components';

function ExpenseFilter(props) {
	const changeHandler = (event) => {
		props.onFilter(event.target.value);
	};
	return (
		<Container>
			<label for='year'>Filter by Year</label>

			<select name='year' id='year' onChange={changeHandler}>
				<option value='2018'>2018</option>
				<option value='2019'>2019</option>
				<option value='2020'>2020</option>
				<option value='2021'>2021</option>
			</select>
		</Container>
	);
}

export default ExpenseFilter;

const Container = styled.div`
	color: white;
	width: 100%;
	display: flex;
	padding: 10px 10px;
	justify-content: space-between;
	align-items: center;
	select {
		padding: 5px 15px;
		outline: none;
		border-radius: 5px;
	}
`;
