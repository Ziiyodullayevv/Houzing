import { styled } from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";

const Wrapper = styled.div`
  background-color: var(--colorPrimary);
  padding: 5px 0;
`;

const Container = styled.div`
  margin: 96px auto;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Card = styled.div``;

Card.Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #ffff;
  line-height: 24px;
  margin-bottom: 32px;
`;

Card.Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  justify-content: start;
  color: #fff9;
  margin-bottom: 20px;
`;

const Icons = styled.div`
  margin-bottom: 20px;
`;

Icons.Email = styled(email)`
  margin-right: 10px;
`;

Icons.Phone = styled(phone)`
  margin-right: 10px;
  & path {
    fill: white;
  }
`;

export { Container, Card, Cards, Icons, Wrapper };
