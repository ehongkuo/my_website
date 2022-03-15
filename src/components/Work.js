import "../css/Work.css";
import "../css/App.css";

import Project from "./Project";
import Footer from "./Footer";

import CLW_Icon from "../images/CLW_Icon.jpg";
import Personal_Icon from "../images/Personal_Website_Icon.png";
import Explorer_Icon from "../images/Terminal_Exp.png";
import Website_1_Icon from "../images/Website_1_Icon.png";


function Work(props) {
    return (
        <div id="work-wrapper">
             <div className="work narrow">
                <h1 className="heading">Here's some of my favorite work:</h1>
                <Project 
                    link="/project-page"
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
                    link="https://github.com/ehongkuo/Explorer-Game"
                    icon={Explorer_Icon}
                    type="Academic Project"
                    name="Terminal Explorer"
                    description="My first big class project will always be special to me. Click here to check it out!"
                    tools="UNIX, C++"
                />
                <Project
                    link="https://ehongkuo.github.io/"
                    icon={Website_1_Icon}
                    type="Frontend Development"
                    name="Personal Website"
                    description="Designed and developed a personal website to demonstrate frontend knowledge and interest in software technologies"
                    tools="Javascript, HTML, CSS"
                />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Work;