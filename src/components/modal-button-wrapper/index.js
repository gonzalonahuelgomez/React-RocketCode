import Button from "../button"
import Modal from "../modal"
import Text from "../text"
import TextInput from "../text-input"
import Title from "../title"

const ModalButton = ({ buttonText }) => {
    return (
        <div className="modal-button-wrapper">
           <Button buttonText={buttonText}/>
           <Modal visible={true}>
               <Title title="REGÍSTRATE"/>
               <Text text="Y mira antes que nadie las novedades" letterSpacing="5px"/>
               <TextInput placeholder="Ingresa tu mail aquí"/>
               <Button buttonText="Unirse"/>
            </Modal>
        </div>
    )
}

export default ModalButton
