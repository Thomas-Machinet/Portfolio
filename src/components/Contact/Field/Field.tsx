import './Field.scss';

function Field({ name, type, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            className="fieldInputEmail"
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
        />
    )
}

export default Field