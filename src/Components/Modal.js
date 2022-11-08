import '../Assets/Styles/Modal.css';

const Modal = ({ children, title, isOpen, setIsOpen }) => {
    return (
        <>
            {isOpen &&
                <div className="overlay">
                    <div className='overlay__content'>
                        <header className='overlay__content__header'>
                            <h3>{title}</h3>
                        </header>
                        <button className='overlay__content__close-button' onClick={() => setIsOpen(!isOpen)}>X</button>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;