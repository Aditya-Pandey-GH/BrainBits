import { useState } from "react";
import SocketFormSubmit from "../../api/SocketFormSubmit";

const SocketForm = () => {
	const [text, setText] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Submitting:", text);
		const data = await SocketFormSubmit({ msg: text });
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit} className="m-4 flex gap-2">
			<input type="text" onChange={(e) => setText(e.currentTarget.value)} className="border rounded px-3 py-2" />
			<button type="submit" className="cursor-pointer">
				Send
			</button>
		</form>
	);
};

export default SocketForm;
