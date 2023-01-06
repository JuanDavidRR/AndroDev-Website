'use client';


import React from "react";

export const TextField = ({
  label,
  placeholder,
  className,
  fieldClassName,
  labelClassName,
  name,
  value,
  pattern,
  handler,
  type,
  typeField,
  disabled = false,
  required = false,
  cols,
  rows
}) => (
  typeField === 'input' ? (
    <div className={className}>
    {label && <label className={labelClassName}>{label}</label>}
    <input
      className={fieldClassName}
      placeholder={placeholder}
      pattern={pattern}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={handler}
      disabled={disabled}
    />
  </div>
  ) : (
    <div className={className}>
    <textarea
      className={fieldClassName}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      name={name}
      value={value}
      onChange={handler}
      disabled={disabled}
      cols={cols}
      rows={rows}
      ></textarea>
  </div>
  )
);

export default TextField;
