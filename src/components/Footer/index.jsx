import React from "react";
import { Cards, Container, Card, Icons, Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Cards>
          <Card>
            <Card.Title>Contact Us</Card.Title>
            <Card.Item>
              <Icons.Email /> Bunyodkor kuchasi, 64-dom, 2 - qavat
            </Card.Item>
            <Card.Item>
              <Icons.Phone /> +998 33 547 62 02
            </Card.Item>
            <Card.Item>
              <Icons.Email /> akobirziyod2323@gmail.com
            </Card.Item>
          </Card>

          <Card>
            <Card.Title>Descover</Card.Title>
            <Card.Item>Chicago</Card.Item>
            <Card.Item>Los Anjelas</Card.Item>
            <Card.Item>Miami</Card.Item>
            <Card.Item>New York</Card.Item>
          </Card>

          <Card>
            <Card.Title>List By Category</Card.Title>
            <Card.Item>Apartment</Card.Item>
            <Card.Item>Condos</Card.Item>
            <Card.Item>Houses</Card.Item>
            <Card.Item>Offices</Card.Item>
            <Card.Item>Retail</Card.Item>
            <Card.Item>Villas</Card.Item>
          </Card>

          <Card>
            <Card.Title>List By Category</Card.Title>
            <Card.Item>About Us</Card.Item>
            <Card.Item>Terms & Conditions</Card.Item>
            <Card.Item>Support Center</Card.Item>
            <Card.Item>Contact Us</Card.Item>
          </Card>
        </Cards>
      </Container>
    </Wrapper>
  );
};
export default Footer;
