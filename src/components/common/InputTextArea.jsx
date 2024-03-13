import React from 'react'

const InputTextArea = ({
  label,
  divClassName,
  labelClassName,
  textareaClassName,
  placeholder,
  name,
  value,
  handleChange,
  handleBlur,
  error,
  touched
}) => {

  return (
    <div className={divClassName}>
        <p className={labelClassName} >{label}</p>
        <textarea
          className={textareaClassName}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        {error && touched ? (
        <span className="text-red-600 sm:text-[10px] md:text-[12px] font-[600] ms-1 mt-1">{error}</span>
        ) : null}
    </div>
  )
}

export default InputTextArea;