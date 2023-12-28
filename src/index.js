import ReactDOM from 'react-dom';

const product = 'MacBook';
const model = ' Air';
const item = product + model;
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/MacBook_LMSD_Issue_2009.jpeg/220px-MacBook_LMSD_Issue_2009.jpeg';

function handleClick() {
	alert('곧 도착합니다.');
}

// 자바스크립트 문법을 사용하려면 중괄호로 써주기
// 변수로 사용할 수 있고 자바스크립트로 된 표현식은 모두 사용 가능
ReactDOM.render(
	<>
		<h1>나만의 {product.toUpperCase()} 주문하기</h1>
		<h1>나만의 {item} 주문하기</h1>
		<img src={imageUrl} alt='제품 사진' />
		<button onClick={handleClick}>확인</button>
	</>,
	// 이미지 태그에도 따옴표가 아니라 {} 중괄호로 감싸기
	document.getElementById('root')
);

// JSX에서 이벤트 핸들러를 등록할 때 addEventListenser보다는
// 이 요소의 속성값으로 이벤트 핸들러를 등록
