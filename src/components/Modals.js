import React from 'react'
import { useModal } from '../hooks/useModal'
import ContactForm from './ContactForm';
import Modal from './Modal'

export const Modals = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(true);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenForm, openForm, closeForm] = useModal(false);

    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>

            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Este es el contenido del modal 1</p>
                <img src="https://placeimg.com/400/400/any" alt="Animals" />
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Este es el contenido del modal 2</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals" />
            </Modal>

            <button onClick={openForm}>Modal 3</button>
            <Modal isOpen={isOpenForm} closeModal={closeForm}>
                <ContactForm/>
            </Modal>
        </div>
    )
}
