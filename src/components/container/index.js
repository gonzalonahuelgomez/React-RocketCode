import "./index.css"
import Title from "../title"
import Text from "../text"
import ModalButton from "../modal-button-wrapper"

const Container = () => {
    return (
        <div className="container">
            <Title title="PRÓXIMA MENTE"/>
            <Text text="¡Vamos a celebrar el lanzamiento de nuestro nuevo sitio!"/>
            <ModalButton buttonText="Notificarme" />
        </div>
    )
}

export default Container
