import "../css/Contact.css";
import "../css/App.css";

import ContactForm from "./ContactForm";
import Social from "./Social";

import Email from "../images/email.png";
import LinkedIn from "../images/linkedin.svg";
import Instagram from "../images/instagram.svg";

import Email_Figma from "../images/Gmail_Figma.svg";
import LinkedIn_Figma from "../images/LinkedIn_Figma.svg";
import Instagram_Figma from "../images/Instagram_Figma.svg";

function Contact() {
    return (
        <div id="contact-wrapper" className="narrow">
            <div className="row">
                <div className="col-5">
                    <h2 className="heading">Let's Connect!</h2>
                    <p className="description">
                        I'm always looking to meet new people in the Software Industry!
                        Whether we have similar interests or not,there is always something interesting to discuss! 
                        If you found my work interesting or would like to ask further questions,
                        feel free to write a quick message below, or reach out via Email, LinkedIn, or Instagram.
                    </p>
                    <ContactForm />
                </div>
                <div className="col-6 offset-1 socials">
                    <div className="email">
                        <Social 
                            link="https://mail.google.com/mail/u/0/#inbox"
                            figma={Email_Figma}
                            icon={Email}
                            description={"Email Me"}
                        />
                    </div>
                    <div className="linkedin">
                        <Social 
                            link="https://www.linkedin.com/in/ehong-kuo/"
                            figma={LinkedIn_Figma}
                            icon={LinkedIn}
                        />
                    </div>  
                    <div className="instagram">
                        <Social 
                            link="https://www.instagram.com/ehongkuo/"
                            figma={Instagram_Figma}
                            icon={Instagram}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;
