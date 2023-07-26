import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env; // env faylida yashirilgan url olish uchun

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        padding: "20px",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(46, 18, 18, 0.2)",
        borderRadius: "50%",
        cursor: "pointer",
        transition: "all 0.3s ease",
        zIndex: "2",
        right: "-40px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.295)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        padding: "20px",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(46, 18, 18, 0.2)",
        borderRadius: "50%",
        cursor: "pointer",
        transition: "all 0.3s ease",
        zIndex: "2",
        left: "-70px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.295)",
      }}
      onClick={onClick}
    />
  );
}

const Category = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container className="container">
      <Content>
        <h2 className="title">Category</h2>
        <h4 className="info">
          Nulla quis curabitur velit volotput auctor bibendium consectitur sit.
        </h4>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              key={value?.id}
              onClick={() => navigate(`/properties?category_id${value?.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};
export default Category;
