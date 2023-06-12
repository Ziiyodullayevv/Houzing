import React from "react";
import { Container } from "./style";

const Button = ({ width, height, children, type, onClick }) => {
  return (
    <Container width={width} height={height} onClick={onClick} type={type}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
