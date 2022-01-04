import "../css/Project.css";
import "../css/App.css";

import Arrow from "../images/right-arrow.svg";

function Project(props) {
    return (
        <div id="project-wrapper">
            <a className="project-link" href={props.link}>
                <div className="codelab-website row">
                    <div className="project-icon col-7">
                        <img className="icon-large" src={props.icon} alt="codelab-website icon"/>
                    </div>
                    <div className="project-details col-5">
                        <p className="type">{props.type}</p>
                        <p className="name">{props.name}</p>
                        <p className="description">{props.description}</p>
                        <p className="tools">{props.tools}</p>
                        <img className="project-arrow" src={Arrow} alt="arrow" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Project;
