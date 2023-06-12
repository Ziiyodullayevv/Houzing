import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

const Input = forwardRef(
  (
    {
      width,
      height,
      type,
      onChange,
      placeholder,
      name,
      value,
      defaultValue,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          onChange={onChange}
          type={type}
          value={value}
          defaultValue={defaultValue}
          name={name}
          placeholder={placeholder}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);
export default Input;
