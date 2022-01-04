import Button from "../button"
import Modal from "../modal"
import Text from "../text"
import TextInput from "../text-input"
import Title from "../title"
import { useState } from "react"

const ModalButton = ({ buttonText }) => {

    const [visible, setVisible] = useState(false)

    const onButtonClick = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    const onModalClick = () => {

    }

    return (
        <div className="modal-button-wrapper">
           <Button buttonText={buttonText} onClick={onButtonClick}/>
           <Modal visible={visible} onClose={onClose}>
               <Title title="REGÍSTRATE"/>
               <Text text="Y mira antes que nadie las novedades" letterSpacing="5px"/>
               <TextInput placeholder="Ingresa tu mail aquí" inputInfo="Hello"/>
               <Button buttonText="Unirse" onClick={onModalClick}/>
            </Modal>
        </div>
    )
}

export default ModalButton
