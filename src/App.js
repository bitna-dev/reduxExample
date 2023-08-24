import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./components/Box";

function App() {
	const num = useSelector((state) => state.num);
	const dispatch = useDispatch();
	const plus = () => {
		dispatch({
			type: "INCREASE",
			payload: {
				num: 5,
			},
		});
	};
	const minus = () => {
		dispatch({
			type: "DECREASE",
			payload: {
				num: 5,
			},
		});
	};
	return (
		<div>
			<button onClick={minus}>-</button>
			<span>{num}</span>
			<button onClick={plus}>+</button>
			<Box />
		</div>
	);
}

export default App;
