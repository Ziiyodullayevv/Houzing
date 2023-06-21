import React, { useRef, useState, useEffect } from "react";
import { Arrow, Blur, Container, Img, Title } from "./style";
import { Carousel } from "antd";
import image1 from "../../assets/img/house1.png";
import image2 from "../../assets/img/house2.png";
const { REACT_APP_BASE_URL: url } = process.env; // env faylida yashirilgan url olish uchun

const Category = () => {
  const slider = useRef();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  console.log(data);
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
      <Title>
        <Title.Heading>Skyper Pool Partment</Title.Heading>
        <Title.SubTitle>how are you</Title.SubTitle>
        <Title.Price>2500$/month</Title.Price>
      </Title>
      <Arrow data-name={"left"} onClick={onMove} />
      <Arrow data-name={"right"} onClick={onMove} left="true" />
    </Container>
  );
};
export default Category;
