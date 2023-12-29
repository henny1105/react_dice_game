function Button({ children }) {
	return <button>{children}</button>;
}

export default Button;

// 컴포넌트 함수에서 따로 가공하지 않고
// 단순히 보여주기만 할 모습은 props children을 사용할 수 있음
