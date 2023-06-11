import React from "react";
import { Container } from "./style";

const Input = ({
  width,
  height,
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
}) => {
  return (
    <Container
      onChange={onChange}
      type={type}
      value={value}
      defaultValue={defaultValue}
      name={name}
      placeholder={placeholder}
      width={width}
      height={height}
    />
  );
};

export default Input;
