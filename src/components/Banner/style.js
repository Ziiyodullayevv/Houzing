import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  height: 571px;
`;

const Img = styled.img`
  width: 100%;
  height: 570px;
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
  font-size: 28px;
  line-height: 48px;
  letter-spacing: 0.02rem;
`;

export { Container, Img, Blur, Title };
