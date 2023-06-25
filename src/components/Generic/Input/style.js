import { styled } from "styled-components";

const Container = styled.input`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e9ec;
  padding: 0 10px;
  border-radius: 2px;
  padding: 0 ${({ icon }) => (icon ? "40px" : "20px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  &:focus {
    border: 1px solid #0061df;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

const Icon = styled.div`
  position: absolute;
  left: 15px;
`;

export { Container, Wrapper, Icon };
