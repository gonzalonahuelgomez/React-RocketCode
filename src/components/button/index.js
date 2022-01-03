import "./index.css"
const Button = ({ buttonText, onClick }) => {

    const onClickHandler = () => {
        onClick && onClick();
    }

    return (
        <button className="homepage_button" onClick={() => onClickHandler()}>
            { buttonText }
        </button>
    )
}

export default Button