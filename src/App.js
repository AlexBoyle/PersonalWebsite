import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ExamplePage from "./Pages/ExamplePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="PageWrapper">
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/*" element={<ExamplePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
