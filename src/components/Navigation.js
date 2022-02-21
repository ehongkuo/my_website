import { NavLink } from "react-router-dom";

import "../css/Navigation.css";

function Navigation() {
    return (
        <div id="navigation-wrapper">
            <div className="home-tab tab">
                <NavLink exact to="/" activeClassName="on-home">
                    Home
                </NavLink>
            </div>
            <div className="work-tab tab">
                <NavLink exact to="/work" activeClassName="on-home">
                    Work
                </NavLink>
            </div>
            <div className="about-tab tab">
                <NavLink exact to="/about" activeClassName="on-about">
                    About
                </NavLink>
            </div>
            <div className="contact-tab tab">
                <NavLink exact to="/contact" activeClassName="on-contact">
                    Say Hello
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;