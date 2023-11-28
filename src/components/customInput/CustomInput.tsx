import { memo } from "react";
import "./CustomInput.css";
import { CustomInputProps } from "../../type";

const CustomInput = memo(
  ({
    label,
    placeholder,
    width,
    widthCon,
    customLabelStyles,
    customInputStyles,
    type,
    value,
    onChange,
    onFocus,
    touched,
    error,
    endIcon,
    inputbgStyles,
  }: CustomInputProps) => {
    return (
      <div style={{ width: widthCon }} className="customInput-contain">
        {label && (
          <label
            style={{
              color: "#777",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              ...customLabelStyles,
            }}
          >
            {label}
          </label>
        )}
        <div
          style={{
            border: touched && error ? "1px solid red" : "1px solid #efefef",
            ...inputbgStyles,
          }}
          className="input-con"
        >
          <input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            type={type}
            style={{ width: width, ...customInputStyles }}
            placeholder={placeholder}
          />
          {endIcon}
        </div>
        <span
          className={`error ${
            touched && error ? "error-visible" : "error-invisible"
          }`}
        >
          {error}
        </span>
      </div>
    );
  },
  (prevProps: CustomInputProps, nextProps: CustomInputProps) => {
    return (
      prevProps?.value === nextProps?.value &&
      prevProps?.placeholder === nextProps?.placeholder
    );
  }
);

export default CustomInput;
