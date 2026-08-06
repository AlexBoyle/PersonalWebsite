import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ExperiencePage from "./Pages/Experience";
import ExamplePage from "./Pages/ExamplePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="PageWrapper">
			<Router>
				<Header />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/experience" element={<ExperiencePage />} />
					<Route path="/*" element={<ExamplePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
