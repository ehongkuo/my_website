import "../css/Home.css";
import "../css/App.css";

import Project from "./Project";
import Footer from "./Footer";

import Profile from "../images/Homepage_Image.jpg";
import Arrow from "../images/right-arrow.svg";

import CLW_Icon from "../images/CLW_Icon.jpg";
import Personal_Icon from "../images/Personal_Website_Icon.png";
import Explorer_Icon from "../images/Terminal_Exp.png";

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
            <div className="work narrow" id="work">
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
                <Project
                    link="/"
                    icon={Explorer_Icon}
                    type="Academic Project"
                    name="Terminal Explorer"
                    description="My first big class project will always be special to me. Click here to check it out!"
                    tools="UNIX, C++"
                />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;