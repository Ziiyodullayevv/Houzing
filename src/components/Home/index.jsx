import React from "react";
import GenCarousel from "../Carousel/inex";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import CategoryCard from "../CategoryCard";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};

export default Home;
