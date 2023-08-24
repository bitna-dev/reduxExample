import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Box = () => {
	const num = useSelector((state) => state.num);
	return (
		<div>
			This is the box and the number is <br />
			{num}
		</div>
	);
};

export default Box;
