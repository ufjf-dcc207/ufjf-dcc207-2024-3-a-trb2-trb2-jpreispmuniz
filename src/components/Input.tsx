import React from "react";
import "./Input.css";

type InputProps = {
  name: string;
  labeltext: string;
  type: string;
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max?: number;
};

const Input: React.FC<InputProps> = ({
  name,
  labeltext,
  type,
  value,
  handleChange,
  max,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{labeltext}</label>
      <input
        id={name}
        placeholder="Digite aqui..."
        type={type}
        value={value}
        maxLength={max}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default Input;
