import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from './Navigation';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import ProjectPage from './ProjectPage';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <div className="App">
            <div id="mobile-error">

            </div>
            <div id="site-container">
                <Router>
                    <ScrollToTop />
                    <Navigation/>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/project-page" element={<ProjectPage />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
