import "./App.css";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import Thourth from "./components/fourth";

function App() {
	return (
		<div className="App">
			{/* <First name="Name" /> */}
			<Second />
			<Third min="2" max="5" />
			<Thourth />
		</div>
	);
}

export default App;
