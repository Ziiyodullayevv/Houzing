import { styled } from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
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
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  transform: ${({ left }) => (left ? "rotate(-90deg)" : "rotate(90deg)")};
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:active {
    transform: scale(0.9);
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

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
`;

Title.Heading = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: 0.02rem;
`;

Title.SubTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02rem;
  opacity: 0.8;
`;

Title.Price = styled.h3`
  font-weight: 700;
  font-size: 27px;
  line-height: 24px;
  letter-spacing: 0.02rem;
`;

export { Container, Arrow, Img, Blur, Title };
