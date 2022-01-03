import "./index.css"

const Modal = ({ visible, children }) => {
    return visible ? (
       <div className="container-modal">
           <div className="modal">
               <div className="modal-closer"></div>
               { children }
           </div>
           <div className="modal-overlay"></div>
       </div>
    ) :
    null;
}

export default Modal;