import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import Slider from "react-slick";
import HouseCard from "../HouseCard";
const { REACT_APP_BASE_URL: url } = process.env; // env faylida yashirilgan url olish uchun

const Recent = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container className="container">
      <Content>
        <h2 className="title">Recent Properties for Rent</h2>
        <h4 className="info">
          Nulla quis curabitur velit volotput auctor bibendium consectitur sit.
        </h4>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return <HouseCard key={value?.id} data={value} />;
        })}
      </Slider>
    </Container>
  );
};
export default Recent;
