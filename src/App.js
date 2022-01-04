//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/index";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
