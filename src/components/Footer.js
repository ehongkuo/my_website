import "../css/Footer.css";
import "../css/App.css";

import Email from "../images/email.png";
import LinkedIn from "../images/linkedin.svg";
import Instagram from "../images/instagram.svg";

function Footer() {
    return (
        <div id="footer-wrapper">
            <h1 className="heading">I'd Love to Connect With You.</h1>
            <div className="row justify-content-center">
                <div className="col-2" align="center">
                    <img className="email-logo" src={Email} alt="email logo" />
                    <p className="subheading-email">Email Me At</p>
                    <p className="info">ehongkuo@gmail.com</p>
                </div>
                <div className="col-4" align="center">
                    <img className="linkedin-logo" src={LinkedIn} alt="linkedin-logo" />
                    <p className="subheading">Lets Connect!</p>
                    <a className="info" href="https://www.linkedin.com/in/ehong-kuo-3b93b1204/" target="_blank">LinkedIn Profile</a>
                </div>
                <div className="col-2" align="center">
                    <img className="instagram-logo" src={Instagram} alt="instagram-logo" />
                    <p className="subheading">Use Instagram?</p>
                    <a className="info" href="https://www.instagram.com/ehongkuo/" target="_blank">Instagram Profile</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
