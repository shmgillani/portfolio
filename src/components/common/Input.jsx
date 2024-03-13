import React from "react";

const Input = ({
  type,
  label,
  placeholder,
  inputDivClass,
  labelClass,
  inputClass,
  name,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  onClick,
  handleKeyDown,
}) => {
  return (
    <div className={inputDivClass}>
      <p className={labelClass}>{label}</p>
      <div className="h-[60px]">
        <input
          type={type ? type : "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          className={inputClass}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={onClick}
          onKeyDown={handleKeyDown}
        />
        {error && touched ? (
          <span className="text-red-600 sm:text-[10px] md:text-[12px] font-[600] font-poppins ms-1 mt-1">
            {error}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
