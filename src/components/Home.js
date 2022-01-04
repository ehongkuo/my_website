import "../css/Home.css";
import "../css/App.css";

import Project from "./Project";

import Profile from "../images/Homepage_Image.jpg";
import Arrow from "../images/right-arrow.svg";

import CLW_Icon from "../images/CLW_Icon.jpg";
import Personal_Icon from "../images/Personal_Website_Icon.png";

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
            <div className="work narrow">
                <h1 className="heading">Here's some of my favorite work:</h1>
                <Project 
                    link="/"
                    icon={CLW_Icon}
                    type="Frontend Development"
                    name="CodeLab Webstite Redesign"
                    description="Revamped CodeLab's website for improved intereactivity, marketing assets and student interest"
                    tools="React, Figma, Node"
                />
                <Project 
                    link="/"
                    icon={Personal_Icon}
                    type="Frontend, UI/UX Design"
                    name="Personal Website 2.0"
                    description="Optimized personal website using React and redesigned using Figma. You are currently looking at my new and improved website!"
                    tools="React, Figma"
                />
            </div>
        </div>
    )
}

export default Home;