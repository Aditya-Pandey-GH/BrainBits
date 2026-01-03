import SocketForm from "../ui/SocketForm";

const Landing = () => {
	// const backend_url = import.meta.env.VITE_BACKEND_URI || "http://localhost:8080/";
	// const [msg, setMsg] = useState("Loading...");

	// useEffect(() => {
	// 	(async () => {
	// 		const backendResponse = await fetch(backend_url);
	// 		const backendData = await backendResponse.json();
	// 		setMsg(backendData.message);
	// 	})();
	// }, []);

	return (
		<>
			{/* <div>{msg}</div> */}
			<SocketForm />
		</>
	);
};

export default Landing;
