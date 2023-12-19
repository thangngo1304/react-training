import { ReactNode, HTMLInputTypeAttribute } from 'react';
import './input-field.css';

export type InputFiledProps = {
  inputClass?: string;
  labelClass?: string;
  htmlFor?: string;
  label?: ReactNode;
  type?: HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  placeholder?: string;
  errorMessage?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const InputField = ({
  name,
  type,
  label,
  value,
  labelClass,
  inputClass,
  placeholder,
  errorMessage,
  onChange
}: InputFiledProps) => {
  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        className={inputClass}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      {errorMessage && (
        <p id="name-error" className="error-message">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default InputField;
