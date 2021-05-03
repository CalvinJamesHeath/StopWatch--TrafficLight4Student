import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 2.5em;
	text-align: center;
	color: #000;
	text-decoration: underline;
`;

// background-color: lightseagreen;
export const Wrapper = styled.section`
	color: white;
	position: relative;
	text-align: center;
`;
export const Container = styled.div`
	width: 600px;
	margin: 3rem auto;
	height: 600px;
	background-color: black;
`;

export const Container3 = styled.div`
	display: flex;
`;
export const Container2 = styled.div`
	width: 600px;
	margin: 3rem auto;
	height: 220px;
	background-color: black;
`;
export const Center = styled.div`
	position: relative;
	left: 17px;
`;

export const Subtitle = styled.h4`
	font-size: 1.5em;
	margin: 1rem 1rem 1rem 1rem;
	color: #fff;
	text-decoration: underline;
`;

export const Numbers = styled.h5`
	font-size: 1.5em;
	margin: 0.5rem 0rem;
	color: #fff;
`;
export const Button = styled.button`
	text-align: center;
	box-sizing: border-box;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-color: transparent;
	border: 2px solid #e74c3c;
	border-radius: 0.6em;
	color: #e74c3c;
	cursor: pointer;
	display: flex;
	-webkit-align-self: center;
	-ms-flex-item-align: center;
	align-self: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1;
	padding: 1.2em 2.8em;
	text-decoration: none;
	text-align: center;
	text-transform: uppercase;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	:hover {
		color: #fff;
		outline: 0;
	}
	margin: 1rem auto;
`;
