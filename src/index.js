import ReactDOM from 'react-dom';

ReactDOM.render(
	// class와 for는 html 문법 그대로 사용할 수 없음
	<h1 className='hello'>안녕 리액트!</h1>,
	// 1. class => className 으로 사용해야함
	<form action=''>
		<label htmlFor='name'>이름</label>
		<input id='name' type='text' onBlur='' onFocus='' onMouseDown='' />
	</form>,
	// 2. label의 for 태그는 htmlFor로 사용해야함
	// Camel Case로 작성해주기
	document.getElementById('root')
);
