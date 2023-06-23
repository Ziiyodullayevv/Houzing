import { styled } from "styled-components";
import { ReactComponent as photo } from "../../assets/icons/calculator.svg";
import { ReactComponent as house } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as map } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as massage } from "../../assets/icons/cardMassage.svg";

const Wrapper = styled.div`
  background-color: #f7f5fc;
  padding: 5px 0;
`;

const Container = styled.div`
  text-align: center;
  margin: 96px auto;
`;

const Content = styled.div`
  margin-bottom: 40px;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Card = styled.div`
  align-items: center;
`;

const Icons = styled.div``;
Icons.Photo = styled(photo)`
  margin-bottom: 20px;
`;
Icons.House = styled(house)`
  margin-bottom: 20px;
`;
Icons.Map = styled(map)`
  margin-bottom: 20px;
`;
Icons.Massage = styled(massage)`
  margin-bottom: 20px;
  & path {
    fill: blue;
  }
`;

export { Container, Content, Wrapper, Card, Cards, Icons };
