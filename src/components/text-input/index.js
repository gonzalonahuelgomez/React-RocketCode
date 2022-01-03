import "./index.css"

const TextInput = ({ placeholder, value, inputInfo}) => {
    return (
        <div className="modal-input">
           <input type="text" className="input-text" placeholder={ placeholder } value={ value }/>
           <p className="input-info">{ inputInfo }</p>
        </div>
    )
}

export default TextInput
