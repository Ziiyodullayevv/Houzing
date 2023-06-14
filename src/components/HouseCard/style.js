import { styled } from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";

const Container = styled.div`
  width: 380px;
  height: 430px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border: 1px solid black;
  background-color: white;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  padding: 20px 20px 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
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

const Footer = styled.div`
  border-top: 1px solid #e6e9ec;
`;

export { Container, Img, Content, Details, Icons, Footer };
