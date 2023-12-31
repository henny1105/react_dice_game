import Dice from './Dice';

function Board({ name, color, gameHistory }) {
	// 마지막 게임 기록을 가져옴 게임 기록이 없는 경우 기본값으로 1
	const num = gameHistory[gameHistory.length - 1] || 1;
	// 게임 기록의 총합을 계산
	const sum = gameHistory.reduce((a, b) => a + b, 0);
	return (
		<div>
			<h2>{name}</h2>
			<Dice color={color} num={num} />
			<h2>총점</h2>
			<p>{sum}</p>
			<h2>기록</h2>
			<p>{gameHistory.join(', ')}</p>
		</div>
	);
}
export default Board;
