import "../css/Social.css";
import "../css/App.css";

import Arrow from "../images/right-arrow.svg";

function Social(props) {
    return (
        <div id="social-wrapper"> 
            <a className="link" href={props.link} target="_blank">
                <div className="row">
                    <div className="col-8">
                        <img className="figma" src={props.figma} alt="figma"/>
                    </div>
                    <div className="col-4 d-flex flex-column icons">
                        <img className="icon" src={props.icon} alt="icon" />
                        <img className="arrow" src={Arrow} alt="arrow" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Social;