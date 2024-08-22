import React, { useState, useEffect } from "react";

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
}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };



    return (
        <div className={`relative ${classBox} rounded-lg`}>
            <input
                type={type}
                name={name}
                value={value}
                id={name}
                onBlur={onBlur}
                className={`block px-4 py-4  w-full text-base font-semibold rounded-lg bg-[#323148] appearance-none peer ${className1} ${error ? "border-[red]" : ""
                    } ${disabled ? "text-[#5D6E66]" : "text-white"}`}
                onChange={handleChange}
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
