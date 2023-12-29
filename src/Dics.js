import diceBlue01 from './assets/dice-blue-1.svg';
import diceRed01 from './assets/dice-red-1.svg';

// porp를 활용하면 컴포넌트에 전달하는 prop 값에 따라 렌더되는 모습을 변경 가능
function Dice(props) {
	const diceImg = props.color === 'red' ? diceRed01 : diceBlue01;
	return <img src={diceImg} alt='주사위' />;
}

export default Dice;
