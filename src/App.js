import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Email from "./pages/EmailContactForm";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/Contact";


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/" element={<Contact />} />
					<Route path="/projects" element={<Projects />}>
						<Route path="/projects/:id" element={<ProjectDisplay />} />
					</Route>
					<Route path="/experience" element={<Experience />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
