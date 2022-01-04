import "./index.css"

const Modal = ({ visible, children, onClose }) => {

    const onCloseHandler = () => {
        onClose && onClose()
    }
    return visible ? (
       <div className="container-modal">
           <div className="modal">
               <div className="modal-closer" onClick={() => onCloseHandler()}></div>
               { children }
           </div>
           <div className="modal-overlay"></div>
       </div>
    ) :
    null;
}

export default Modal;