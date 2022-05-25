import React from "react";

const Modal = ({ onClose, currentProject }) => {
    const { title, technologies, description } = currentProject;

    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{title}</h3>
                <img src={(`/assets/${title}/.png`)} alt="current project"/>
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