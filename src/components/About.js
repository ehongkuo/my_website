import "../css/About.css";
import "../css/App.css";

import Grad_Profile from "../images/grad.jpg";
import Footer from "./Footer"
import Arrow from "../images/right-arrow.svg";


function About() {
    


    return (
        <div id="about-wrapper">
            <div className="row introduction">
                <div className="col-4 offset-1">
                    <img className="about-profile" src={Grad_Profile} alt="facebook profile" />
                </div>
                <div className="col-5 offset-1 about-text">
                    <h1>Let Me Introduce Myself.</h1>
                    <p className="description">Hello there! I'm Ehong, a recent UC Davis grad with a Bachelors in Computer Science.
                        Through my experiences, I have developed a passion for creating seamless customer experiences. <br/><br/>
                        In my latest role with Grata, I helped build and deploy a smart home/living iOS mobile application!
                        At Lam Research, I was involved in the development cycle of a search engine that would save 10+ engineer hours per week. 
                        At BlockScience, I helped test an internal data-modeling Python library to simulate real-world systems like ecosystems or stock prices!<br/><br/> 
                        Out of the office, you'll find me playing guitar, shooting hoops at a nearby park, or at Chipotle.
                    </p>
                    <a href="https://drive.google.com/file/d/1NwX7xqtmrL7nRNgdhVplh6UKQQd1X6B3/view?usp=sharing" className="button resume" target="_blank">
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
                            <p className="timeline-event-thumbnail">February 2023 - Present</p>
                            <h3>Grata</h3>
                            <h4>Software Engineer Intern</h4>
                            <p>Working with Grata, I learned about iOS app deployment and development as I helped work on a smart home/living app. This app involved front-end technologies like SwiftUI and utilizing API calls to back-end services using Postman (An API service) and Alfred (an iOS SDK).</p>
                            <p>
                                This was my first role in which I was fully involved in the end-to-end functionality of the project and it taught me so much about architectures and taking ownership of feature development!
                            </p>
                        </div>
                    </div>
                    <div className="timeline-event">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">July - September 2022</p>
                            <h3>Lam Research</h3>
                            <h4>Software Engineer Intern</h4>
                            <p>In my internship at Lam Research, I was able to work on a Front-End application using Blazor that displayed job data from Lam's wafer processing hardware. This data would be piped from a hardware-specific software into a JSON file which would provide the data necessary to allow search queries.</p>
                            <p>I'm very thankful for my project manager, Jackie Zhang, as well as my project partner, Kiran Davuluri, for their guidance and help on this project and their great advice!</p>
                        </div>
                    </div>
                    <div className="timeline-event">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">January 2022 - Present</p>
                            <h3>BlockScience</h3>
                            <h4>Software Developer</h4>
                            <p>This CodeLab term, the team and I are working with BlockScience, an engineering and analytics firm, to help in their data modeling efforts using their internal tool, cadCAD.</p>
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
                            <p>In CodeLab, our spark teams work on new projects under the management of club executives. This term, I was fortunate enough to take on my second front-end project (after my original personal site) using React.js. This made future front-end projects including this website much more efficient.</p>
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
