import React from 'react';
import {
	Center,
	Container2,
	Container3,
	Subtitle,
	Numbers,
	Title,
	Button,
} from './styled';
const Timer = () => {
	const [time, setTime] = React.useState(0);
	const [timerOn, setTimerOn] = React.useState(false);

	React.useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!timerOn) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<div>
			<Title>Cronómetro</Title>

			<Container2>
				<Center>
					<table>
						<tr>
							<td>
								<Subtitle>Minutos</Subtitle>
							</td>

							<td>
								{' '}
								<Subtitle>Segundos</Subtitle>
							</td>

							<td>
								<Subtitle>Milisegundos</Subtitle>
							</td>
						</tr>
						<tr>
							<td>
								<Numbers>
									<span>
										{('0' + Math.floor((time / 60000) % 60)).slice(-2)}
									</span>
								</Numbers>
							</td>

							<td>
								<Numbers>
									<span>
										{('0' + Math.floor((time / 1000) % 60)).slice(-2)}
									</span>
								</Numbers>
							</td>

							<td>
								<Numbers>
									<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
								</Numbers>
							</td>
						</tr>
					</table>
				</Center>
				<Container3>
					{!timerOn && time === 0 && (
						<Button onClick={() => setTimerOn(true)}>Comenzar</Button>
					)}
					{timerOn && <Button onClick={() => setTimerOn(false)}>Frenar</Button>}
					{!timerOn && time > 0 && (
						<Button onClick={() => setTime(0)}>Resetar</Button>
					)}
					{!timerOn && time > 0 && (
						<Button onClick={() => setTimerOn(true)}>Resumir</Button>
					)}
				</Container3>
			</Container2>
		</div>
	);
};

export default Timer;
