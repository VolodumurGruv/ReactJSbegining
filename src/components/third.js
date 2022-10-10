import { useEffect, useRef, useState } from "react";

export default function Third(props) {
	const [inputValue, setInputValue] = useState("");
	const ref = useRef("");

	useEffect(() => {
		console.log(ref.current);
		if (props.min >= inputValue.length) {
			ref.current = `"${inputValue}" should be more or equal ${props.min}`;
		} else if (props.max >= inputValue.length) {
			ref.current = `"${inputValue}" should be less or equal ${props.max}`;
		} else if (!inputVallue.length) {
			ref.current = "";
		}
	}, [inputValue]);

	function handleEvent(e) {
		setInputValue(e.target.value);
	}

	return (
		<div>
			<input type="text" onChange={handleEvent} />
			<p>{ref.current}</p>
		</div>
	);
}
