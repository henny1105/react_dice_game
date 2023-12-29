import { useState } from 'react';
import Button from './Button';
import Dice from './Dics';

// 랜덤 함수
function random(n) {
	return Math.ceil(Math.random() * n);
}

function App() {
	const [num, setNum] = useState(1);

	const handleRollClick = () => {
		const nextNum = random(6);
		setNum(nextNum);
	};
	// useState 함수는 파라미터로 초기값을 전달받음
	// 이 함수가 실행된 다음에는 배열의 형태로 요소 두개를 리턴하게 됨
	// 첫번째는 변수의 상태, 두번째는 setter 함수 -> 함수를 호출할 때 파라미터로 전달하는 값으로 state 값이 변경됨

	const handleClearClick = () => {
		setNum(1);
	};
	return (
		<div>
			<div>
				<Button onClick={handleRollClick}>던지기</Button>
				<Button onClick={handleClearClick}>처음부터</Button>
			</div>
			<Dice color='red' num={num} />
		</div>
	);
}
export default App;
