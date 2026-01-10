import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";

import LandingPage from "./components/pages/LandingPage";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/utils/ProtectedRoutes";

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<LandingPage />} />
					<Route path={"/signup"} element={<Signup />} />
					<Route path={"/login"} element={<Login />} />
					<Route
						path={"/dashboard"}
						element={
							<ProtectedRoute>
								<LandingPage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
