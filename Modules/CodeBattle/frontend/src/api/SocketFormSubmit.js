const SocketFormSubmit = async (formData) => {
	const backend_url = import.meta.env.VITE_BACKEND_URI || "http://localhost:8080/";
	const res = await fetch(backend_url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	});
	return await res.json();
};

export default SocketFormSubmit;
