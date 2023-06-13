import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 560px;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 100%;
  height: 570px;
`;

const Arrow = styled(arrow)`
  top: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  transform: ${({ left }) => (left ? "rotate(-90deg)" : "rotate(90deg)")};
  &:hover {
    opacity: 0.7;
  }
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export { Container, Arrow, Img, Blur };
