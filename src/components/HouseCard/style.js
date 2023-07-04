import { styled } from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 340px;
  min-width: 330px;
  border-radius: 4px;
  height: auto;
  border: 1px solid #e6e9ec;
  background-color: white;
  transition: all 0.1s ease-in;
  &:hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  min-height: 200px;
`;

const Content = styled.div`
  padding: 20px 20px 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0 8px;
`;

Details.Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
  width: 15px;
  height: 15px;
  & path {
    fill: ${({ favourite }) => (favourite ? "red" : "gray")};
  }
`;
Icons.Resize = styled(resize)`
  width: 15px;
  height: 15px;
`;

const Footer = styled.div`
  margin-top: 16px;
  border-top: 1px solid #e6e9ec;
  padding: 0 20px;
`;

export { Container, Img, Content, Details, Icons, Footer };
