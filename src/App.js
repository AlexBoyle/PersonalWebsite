import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ExamplePage from "./Pages/ExamplePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div style={{ maxWidth: "1000px", margin: "auto", overflow: "hidden" }}>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/*" element={<ExamplePage />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
