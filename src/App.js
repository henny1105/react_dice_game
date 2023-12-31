import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';

function random(n) {
	return Math.ceil(Math.random() * n);
}

function App() {
	const [myHistory, setMyHistory] = useState([]);
	const [otherHistory, setOtherHistory] = useState([]);

	const handleRollClick = () => {
		const nextMyNum = random(6);
		const nextOtherNum = random(6);

		setMyHistory([...myHistory, nextMyNum]);
		setOtherHistory([...otherHistory, nextOtherNum]);
	};

	const handleClearClick = () => {
		setMyHistory([]);
		setOtherHistory([]);
	};

	return (
		<div className='App'>
			<div>
				<h1 className='App-title'>주사위게임</h1>
				<Button className='Button blue App-button' color='blue' onClick={handleRollClick}>
					던지기
				</Button>
				<Button className='Button red App-button' color='red' onClick={handleClearClick}>
					처음부터
				</Button>
			</div>
			<div className='Board App-board'>
				<Board name='나' color='blue' gameHistory={myHistory} />
			</div>
			<div className='Board App-board'>
				<Board name='상대' color='red' gameHistory={otherHistory} />
			</div>
		</div>
	);
}

export default App;
