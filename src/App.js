import { useState } from 'react';
import Board from './Board';
import Button from './Button';

// 랜덤 함수
function random(n) {
	return Math.ceil(Math.random() * n);
}

function App() {
	// 각각 사용자와 상대방 주사위 기록을 저장함
	const [myHistory, setMyHistory] = useState([]);
	const [otherHistory, setOtherHistory] = useState([]);

	// 랜덤으로 숫자를 생성하고 이전기록에 추가함
	const handleRollClick = () => {
		const nextMyNum = random(6);
		const nextOtherNum = random(6);

		setMyHistory([...myHistory, nextMyNum]);
		setOtherHistory([...otherHistory, nextOtherNum]);
	};

	// 기록을 초기화 하는 함수
	const handleClearClick = () => {
		setMyHistory([]);
		setOtherHistory([]);
	};
	return (
		<div>
			<div>
				<Button color='blue' onClick={handleRollClick}>
					던지기
				</Button>
				<Button color='red' onClick={handleClearClick}>
					처음부터
				</Button>
			</div>
			<div>
				<Board name='나' color='blue' gameHistory={myHistory} />
				<Board name='상대' color='red' gameHistory={otherHistory} />
			</div>
		</div>
	);
}

export default App;
