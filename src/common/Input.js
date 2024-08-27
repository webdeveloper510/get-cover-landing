import React from "react";

const Input = ({
    type,
    error,
    value,
    onBlur,
    name,
    required,
    className1,
    disabled,
    placeholder,
    classBox,
    onChange, // Pass the onChange prop to the component
}) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e); // Call the onChange function passed from the parent
        }
    };

    return (
        <div className={`relative ${classBox} rounded-lg`}>
            <input
                type={type}
                name={name}
                value={value} // Controlled component
                id={name}
                onBlur={onBlur}
                className={`block px-4 py-4  w-full text-base outline-none font-medium rounded-lg bg-[#323148] appearance-none peer ${className1} ${error ? "border-[red]" : ""
                    } placeholder-white text-white`}
                onChange={handleChange} // Use the handleChange function
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                onWheel={(e) => e.target.blur()}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};

export default Input;
