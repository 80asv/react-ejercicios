import React from 'react'
import './Modal.css';

const Modal = ({children, isOpen, closeModal}) => {

    const handlerModalContainerClick = e => e.stopPropagation();
    
    return (
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handlerModalContainerClick}>
                <button className='modal-close' onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal