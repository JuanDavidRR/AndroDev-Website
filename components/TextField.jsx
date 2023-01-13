"use client";

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
  rows,
  options,
  ariaLabel,
  id,
}) =>
  typeField === "input" ? (
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
        id={id}
      />
    </div>
  ) : type === "textarea" ? (
    <div className={className}>
      {label && <label className={labelClassName}>{label}</label>}

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
        id={id}
      ></textarea>
    </div>
  ) : (
    <div className={className}>
      {label && <label className={labelClassName}>{label}</label>}
      <select
        className={fieldClassName}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        onChange={handler}
        disabled={disabled}
        options={options}
        aria-label={ariaLabel}
        id={id}
      >
        {options.map((option, index) => (
          <option className="text-black" key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

export default TextField;
