import "../css/ProjectPage.css";
import "../css/App.css";

import logo from "../images/CodeLab_Logo.png";
import about from "../images/About.png";
import footer from "../images/Footer.png";
import Arrow from "../images/right-arrow.svg";


function ProjectPage(props) {
    
    return (
        <div id="project-page-wrapper">
            <div className="row introduction">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="heading">CodeLab Website Redesign</h1>
                <p className="updated">Updated: {props.updated}</p>
                <div className="col-9">
                    <h2 className="subheading">A Complete Revamping</h2>
                    <p className="description">In a previous term, the CodeLab Homepage was created using vanilla technologies, namely HTML and CSS, and that team had run into some issues.
                        Due to inefficient code and a lack of interactive elements, the board had assigned the task of rebuilding this website to its newest team of Front-End Engineers.<br/><br/>
                        As a developer, I put into code what our designer/project manager had imagined in our Figma wireframe.
                        Starting with the larger page skeletons, I was tasked to build, style, and link the "About" and "Involvment" pages as well as create the Footer and Navigation Bar components. <br/><br/>
                        The "About" page shown below was especially challenging as I was encouraged to build a "Member" component that would consist of a member's profile, name, position, and linkedIn information.
                        Learning to pass in props into components as well as efficiently managing all of the members' data was one of the many notable learning experiences of the project. 
                    </p>
                    <img className="about img" src={about} alt="About Page"/>
                    <p className="description">
                        Another learning experience from this project was in the Footer implementation. 
                        This task required usage of React "state and lifecycle" in order to implement a 
                        Furthermore, in order to implement a 'mailing list' feature, I looked into the NPM package ecosystem and utilized the node-mailchimp API.
                        This is a common API that is used to integrate Mailchimp into a personal application. 
                        As my first experience with the NPM as well as Node.js, I began to feel like a true software developer after overcoming this challenge!
                    </p>
                    <img className="footer img" src={footer} alt="Footer Component"/>
                    <p className="description">
                        This was my first project with a larger team within an organization.
                        Learning to cooperate with a team by using developer tools useful for team communication / development such as Jira, Slack and Git provided valuable insight into industry practices.
                        I am very grateful to CodeLab Davis for this opportunity!
                    </p>
                    
                </div>
                <div className="col-3">
                    <h2 className="subheading">Duration</h2>
                    <p className="description">October - December 2021</p>
                    <br/>
                    <h2 className="subheading">Team Members</h2>
                    <div className="description">
                        <a className="member" href='https://www.linkedin.com/in/edwardchew8/' target="_blank">Edward Chew (PM)</a><br/>
                        <a className="member" href='https://www.linkedin.com/in/ehong-kuo/' target="_blank">Ehong Kuo (Me!)</a><br/>
                        <a className="member" href='https://www.linkedin.com/in/parmindersingh/' target="_blank">Parminder Singh</a><br/>
                        <a className="ninad">Ninad Swadi</a>
                    </div>
                </div>
                <a className="intro-about link" href="/">
                    Return Home
                    <img className="arrow" src={Arrow} alt="arrow" />
                </a>
        </div>
        </div>
    )
}

export default ProjectPage;