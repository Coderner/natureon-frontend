const FormInput = ({ label, type = "text", name, value, onChange, placeholder, min }) => {
    return(
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold mb-1">
            {label}
            </label>
            <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
        </div>
    )
};

export default FormInput;