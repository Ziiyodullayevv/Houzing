import { styled } from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 240px;
  min-width: 200px;
  border-radius: 4px;
  max-height: 300px;
  min-height: 250px;
  border: 1px solid #e6e9ec;
  background-color: white;
  transition: all 0.1s linear;
  &:hover ${Blur} {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
`;

const Img = styled.img`
  width: 100%;
  height: 380px;
  max-height: 380px;
  min-height: 350px;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  line-height: 28px;
  z-index: 2;
  font-size: 18px;
  font-weight: 600;
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
  width: 15px;
  height: 15px;
`;
Icons.Resize = styled(resize)`
  width: 15px;
  height: 15px;
`;

export { Container, Img, Content, Icons, Blur };
