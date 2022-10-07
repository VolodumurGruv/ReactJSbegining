import { useState, useEffect } from "react";

export default function Fourth() {
	const [apiSrc, setApiSrc] = useState("");

	const defaultImg =
		"https://random.dog/ffd44f07-7de4-4b8e-8582-8f90fb873ba8.gif";

	const getApiData = () =>
		fetch("https://random.dog/woof.json").then((res) => res.json());

	useEffect(() => {
		getApiData().then((data) => {
			if (data.url) {
				setApiSrc(data.url);
			}
		});
	}, []);

	function checkFileType(file) {
		const fileType = file.split(".").splice(-1, 1).join("");
		switch (fileType) {
			case "jpg":
			case "jpeg":
			case "gif":
				return <img src={apiSrc} />;
			case "mp4":
				return (
					<video controls>
						<source src={apiSrc} type="video/mp4" />
					</video>
				);
			default:
				return <img src={defaultImg} />;
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
