import React, { useState, useEffect } from "react";
import { Container } from "./style";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env; // env faylida yashirilgan url olish uchun

const Category = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    centerMode: true,
  };

  // const navigate = useNavigate();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`${url}/category/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []);

  return (
    <Container className="container">
      <Slider {...settings}>
        {/* {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category=${value?.name}`)}
              data={value}
            />
          );
        })} */}

        {/* bu qism olib tashlanadi */}
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Slider>
    </Container>
  );
};
export default Category;
