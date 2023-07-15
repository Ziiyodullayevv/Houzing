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
  const token =
    "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiYWtvYmlyeml5b2QyMzIzQGdtYWlsLmNvbSIsImV4cCI6MTcwNjQ3NDc0MSwiaWF0IjoxNjg4NDc0NzQxLCJzY29wZSI6IlJPTEVfVVNFUiJ9.Z5EoWl9TPDmQe_NV0Y8PUzBiptuvtjnOx9aLcIXn-6rhflwjTxx0dF-JzZsh36P4yBcuRba7kTLt6L3a9RtS-dxPYBRL6Va0b2-c8aBr-1StieWesQZkScHQEAJcQBg1BVjA3azLC9yGjel4qTTos0dbc44ZtOwrddmhpMPzY5GiyaRfrSnAuX9MtDPzDsrOthvUxDe1sQkFW4UeHzCBziZ2U9NonUHOltJmNcXbUB0ebsc0_PI2heok7txaELuW49qoYofoVANwb7BXBZKenxIC7xutU7QhL6bG3PZVDAJxKZyoQXk66rBXYM_xAziOYlG_UP_UKsTOn-EZrC9unQ";

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/categories/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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
