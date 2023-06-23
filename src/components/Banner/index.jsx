import React from "react";
import { Blur, Container, Img, Title } from "./style";
import { Carousel } from "antd";
import image from "../../assets/img/house1.png";
import Button from "../Generic/Button";

const Banner = () => {
  return (
    <Container>
      <Carousel>
        <Img src={image} />
      </Carousel>
      <Blur />
      <Title>
        <Title.Heading>Vermont Farmhouse With Antique Jail Is</Title.Heading>
        <Title.Heading style={{ marginBottom: "20px" }}>
          the Week's Most Popular Home
        </Title.Heading>
        <Button width={200}>Read More</Button>
      </Title>
    </Container>
  );
};
export default Banner;
