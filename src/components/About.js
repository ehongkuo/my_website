import "../css/About.css";
import "../css/App.css";

import FB_Profile from "../images/fb_profile.jpg";
import Footer from "./Footer"
import Arrow from "../images/right-arrow.svg";


function About() {
    


    return (
        <div id="about-wrapper">
            <div className="row introduction">
                <div className="col-4 offset-1">
                    <img className="about-profile" src={FB_Profile} alt="facebook profile" />
                </div>
                <div className="col-5 offset-1 about-text">
                    <h1>Let Me Introduce Myself.</h1>
                    <p className="description">Hello there! I'm Ehong, a third year student at UC Davis studying Computer Science.
                        Through my coursework here at Davis, I have been expanding my knowledge in various subfields of computer science such as web application development and machine learning. <br/><br/>
                        Through several opportunities to work on front-end projects, I have developed interest in creating useful websites!
                        Currently, I hope to deepen my knowledge on website and application development while keeping my mind open to experiencing different software fields.<br/><br/>
                        These days, my time is spent completing coursework, adding new features to personal projects, and applying for internship positions. 
                        Out of the office, you'll find me playing guitar, shooting hoops at a nearby park, or at Chipotle.
                    </p>
                    <a href="" className="button resume">
                        View Resume
                        <img className="arrow" src={Arrow} alt="arrow" />
                    </a>
                    
                </div>
            </div>
            <div className="experience">
                <h1 className="heading">Experience and Involvement</h1>
                <div className="timeline">
                    <div className="timeline-event">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">January 2022 - Present</p>
                            <h3>CodeLab</h3>
                            <h4>BlockScience Developer</h4>
                            <p>Industry Partner Developer<br/>This CodeLab term, the team and I are working with BlockScience, an engineering and analytics firm, to help in their data modeling efforts using their internal tool, cadCAD.</p>
                            <p>Right now, we are developing a cadCAD model to simulate environmental ecosystems in an effort to use this model as an example to help future users to develop their own models using cadCAD. As we are continuously making progress throughout the term, feel free to check back in to view updates on progress!</p>
                            <p>In the meantime, if you are interested in modeling a real-life system using Python, check out <a className="button cadCAD" href="http://cadcad.org/" target="_blank">
                                cadCAD
                                <img className="arrow smaller" src={Arrow} alt="arrow" />
                            </a>
                            </p>
                        </div>
                    </div>
                    <div className="timeline-event">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">September 2021 - December 2021</p>
                            <h3>CodeLab</h3>
                            <h4>Front-End Developer</h4>
                            <p>Spark Team Developer<br/>In CodeLab, our spark teams work on new projects under the management of club executives. This term, I was fortunate enough to take on my second front-end project (after my original personal site) using React.js. This made future front-end projects including this website much more efficient.</p>
                            <p>This project also familiarized me with the design tool, Figma, which taught me the importance of design in creating a smooth user experience. </p>
                        </div>
                    </div>
                    <div className="timeline-event">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">September 2020 - December 2020</p>
                            <h3>Lifetime Activities</h3>
                            <h4>Customer Service Representative</h4>
                            <p>This was my first job, where I helped provide business development plans and guidance for private or municipal tennis operations at my local Lifetime Activities facility.</p>
                            <p>My responsibilities included managing customer reservations, registrations, and balances on the Lifetime Activities database.</p>
                        </div>
                    </div>
                </div>  
            </div>
            
            
            <Footer />
        </div>
    )
}

export default About;
