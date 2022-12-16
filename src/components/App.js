import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from './Navigation';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import ProjectPage from './ProjectPage';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

import Profile from '../images/Profile.jpeg';

function App() {
    return (
        <div className="App">
            <div id="mobile-error">
                <div className="flex">
                    <img className="profile" src={Profile} />
                </div>
                <div className="card">
                    <p className="heading">Welcome to my Personal Website!</p>
                    <p className="description">
                        This site was imagined for a desktop experience. Visit again at <strong>ehongkuo.com</strong> <br /><br />
                        Or, check out the source code on my Github <a className="github" href="https://github.com/ehongkuo/my_website">Here</a>
                    </p>
                </div>

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
