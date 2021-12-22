import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from './Navigation';

function App() {
    return (
        <div className="App">
            <div id="mobile-error">

            </div>
            <div id="site-container">
                <Router>
                    <Navigation/>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
