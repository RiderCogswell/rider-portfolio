import { image } from "faker";
import React from "react";

const Modal = ({ onClose, currentProject }) => {
    const { title, technologies, description, link, image } = currentProject;

    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{title}</h3>
                <a href={link} target="project">
                  <img src={require(`../../assets/${image}`)} alt="current project"/>
                </a>
                <p>
                  {description}
                  {technologies}
                </p>
                <button onClick={onClose} type="button">
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal