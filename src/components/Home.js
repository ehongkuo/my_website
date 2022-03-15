import "../css/Home.css";
import "../css/App.css";

import Footer from "./Footer";
import Work from "./Work";

import Profile from "../images/Homepage_Image.jpg";
import Arrow from "../images/right-arrow.svg";


function Home() {
    return (
        <div id="home-wrapper">
            <div className="introduction narrow">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="intro-greeting">
                            Hi. I'm Ehong. <br/>
                            A Developer.
                        </h1>
                        <p className="intro-greeting">I'm a front-end developer and a third year computer science student at UC Davis.</p>
                        <a className="intro-about link" href="/about">
                            More About Me
                            <img className="arrow" src={Arrow} alt="arrow" />
                        </a>
                    </div>
                    <div className="col-md-6" align="center">
                        <img className="intro-profile" src={Profile} alt="profile" />
                    </div>
                </div>
            </div>
            <div className="background"></div>
            <div className="work">
                <Work />
            </div>
        </div>
    )
}

export default Home;