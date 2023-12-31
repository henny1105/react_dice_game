import { useState } from 'react';
import Button from './Button';
import Dice from './Dics';

function random(n) {
	return Math.ceil(Math.random() * n);
}

function App() {
	const [num, setNum] = useState(1);
	const [sum, setSum] = useState(0);
	const [gameHistory, setgameHistory] = useState([]);

	const handleRollClick = () => {
		const nextNum = random(6);
		setNum(nextNum);
		setSum(sum + nextNum);

		// gameHistory 가 배열이기 때문에 기본형이 아니라 참조형임
		// 기록들을 가진 배열 자체를 값으로 갖는게 아니라
		// 배열을 가리키고 있는 주솟값을 가지고 있는 것임

		// gameHistory.push(nextNum);
		// setgameHistory(gameHistory);
		setgameHistory([...gameHistory, nextNum]);
		// spread 문법 활용
	};

	const handleClearClick = () => {
		setNum(1);
		setSum(0);
		setgameHistory([]);
	};

	return (
		<div>
			<div>
				<Button onClick={handleRollClick}>던지기</Button>
				<Button onClick={handleClearClick}>처음부터</Button>
			</div>
			<div>
				<h2>나</h2>
				<Dice color='blue' num={num} />
				<h2>총점</h2>
				<p>{sum}</p>
				<h2>기록</h2>
				<p>{gameHistory.join(', ')}</p>
				{/* 아규먼트로 전달한 이 값을 배열의 각 요소들 사이사이에 넣어서
				결과적으로는 하나의 문자열로 만들어주는 메소드 */}
			</div>
		</div>
	);
}
export default App;
