import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from './styled';
import { Wrapper } from './styled';
import { Container } from './styled';

function App() {
	const [clicked, setClicked] = useState(false);

	const encender = () => {
		setClicked(!clicked);
	};
	const Circle = styled.div`
		border-radius: 50%;
		width: 500px;
		height: 500px;
		:hover {
			cursor: pointer;
			border: 3px solid #2ecc71;
		}
		background: ${clicked ? '#66ff00;' : '#16a085'};
		margin: auto;
		position: relative;
		top: 40px;
	`;
	return (
		<div className='App'>
			<Wrapper>
				<Title>Haz Click Para Encender!</Title>
				<Container>
					<Circle onClick={encender} />
				</Container>
			</Wrapper>
			{/* <div className='contenedor'>
				<div class='circleBase type1'></div>
			</div> */}
		</div>
	);
}

export default App;
