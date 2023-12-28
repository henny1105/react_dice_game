import ReactDOM from 'react-dom';

// const element = <h1>안녕 리액트!</h1>;
function Hello() {
	// 꼭 첫글자는 대문자로 만들기
	return <h1>안녕 리액트</h1>;
}
// 리액트 컴포넌트
// 리액트 엘리먼트를 리액트 컴포넌트로 만들어서 활용
//

const element = (
	<>
		<Hello />
		<Hello />
		<Hello />
	</>
);

console.log(element);
// 리액트 엘리먼트
// ReactDOM에 render 메소드로 전달하게 되면 리액트가 이 객체를 해석해서 HTML로 해석하게 됨
ReactDOM.render(element, document.getElementById('root'));
