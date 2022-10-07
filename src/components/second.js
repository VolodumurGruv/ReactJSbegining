import { useState } from "react";
import "../styles/second.css";

export default function Second() {
	const [count, setCount] = useState(0);
	const [countThird, setCountThird] = useState(0);
	const [countThourth, setCountThourth] = useState(0);

	return (
		<div>
			<div>
				<button className="btn" onClick={() => setCount(count + 1)}>
					Click
				</button>
				<p>This count is {count > 10 ? "bigger than 10" : "less than 10"}</p>
			</div>
			<div>
				<button className="btn" onClick={() => setCountThird(countThird + 1)}>
					Increase
				</button>
				<button className="btn" onClick={() => setCountThird(countThird - 1)}>
					Decrease
				</button>
				<p>Count third is {countThird}</p>
			</div>
			<div>
				<button className="btn" onClick={() => setCountThourth(countThourth + 1)}>
					Add 1
				</button>
				<button className="btn" onClick={() => setCountThourth(countThourth + 5)}>
					Add 5
				</button>
				<button className="btn" onClick={() => setCountThourth(countThourth + 10)}>
					Add 10
				</button>
				<button
					className="btn"
					onClick={() => setCountThourth(countThourth * countThourth)}
				>
					Multiple on itself
				</button>
				<p>Count thoutrh is {countThourth}</p>
			</div>
		</div>
	);
}
