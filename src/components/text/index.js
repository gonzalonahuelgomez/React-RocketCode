import "./index.css"

const Text = ({ text, letterSpacing="2px" }) => {
    return (
       <p className="container-text" style={{ letterSpacing }}>{ text }</p>
    )
}

export default Text;