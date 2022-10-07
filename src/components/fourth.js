import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import { useState, useEffect } from "react";

export default function Fourth() {
	const [apiSrc, setApiSrc] = useState("");

	const getApiData = () =>
		fetch("https://random.dog/woof.json").then((res) => res.json());

	useEffect(() => {
		getApiData().then((data) => {
			console.log(data.url);

			return setApiSrc(data.url);
		});
	}, []);

	function checkFileType(file) {
		console.log("runned");
		const fileType = file.split(".").splice(-1, 1).join("");
		if (fileType === "jpg" || fileType === "jpeg" || fileType === "gif") {
			return <img src={apiSrc} />;
		} else if (fileType === "mp4") {
			return (
				<video controls>
					<source src={apiSrc} type="video/mp4" />
				</video>
			);
		} else {
			getApiData().then((data) => {
				console.log(data.url);
				setApiSrc(data.url);

				return checkFileType(data.url);
			});
		}
	}

	return (
		<div>
			<button
				className="btn"
				onClick={() =>
					getApiData()
						.then((data) => setApiSrc(data.url))
						.catch((e) => console.log(e))
				}
			>
				Refresh the pic
			</button>
			{checkFileType(apiSrc)}
		</div>
	);
}
