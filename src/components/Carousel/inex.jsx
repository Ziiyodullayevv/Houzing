import React, { useRef } from "react";
import { Arrow, Blur, Container, Img } from "./style";
import { Carousel } from "antd";
import image1 from "../../assets/img/house1.png";
import image2 from "../../assets/img/house2.png";

const GenCarousel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Carousel autoplay ref={slider} effect="fade">
        <Img src={image1} />
        <Img src={image2} />
        <Img src={image1} />
        <Img src={image2} />
      </Carousel>
      <Blur />
      <Arrow data-name={"left"} onClick={onMove} />
      <Arrow data-name={"right"} onClick={onMove} left="true" />
    </Container>
  );
};
export default GenCarousel;
