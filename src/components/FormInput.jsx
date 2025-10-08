const FormInput = ({ label, type = "text", name, value, onChange, placeholder, min, prefix}) => {
    return(
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold mb-1">
            {label}
            </label>
            <div className="relative">
                {prefix && (
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        {prefix}
                    </span>
                )}
                <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min={min}
                className={`border rounded ${prefix ? "pl-6 sm:pl-7" : "px-3"} py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400`}
                />
            </div>
        </div>
    )
};

export default FormInput;