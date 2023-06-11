import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        color: "#ffff",
        background: "transparent",
        border: "1px solid #ffff",
      };
    case "light":
      return {
        color: "#0d263b",
        background: "#ffff",
        border: "1px solid #e6e9ec",
      };
    default:
      return {
        color: "#ffff",
        background: "#0061df",
        border: "none",
      };
  }
};

const Container = styled.input`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  /* ${getType}; */
`;

export { Container };
