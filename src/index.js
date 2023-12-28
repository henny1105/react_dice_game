import { Fragment } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<div>
		<p>안녕</p>
		<p>리액트</p>
	</div>,

	// 리액트는 div안에 모두 감싸줘야한 div를 쓰고 싶지 않다면?
	// Fragment로 감싸주기
	<Fragment>
		<p>안녕</p>
		<p>리액트</p>
	</Fragment>,

	// 이름 없는 프래그먼트도 사용가능
	<>
		<p>안녕</p>
		<p>리액트</p>
	</>,
	document.getElementById('root')
);
