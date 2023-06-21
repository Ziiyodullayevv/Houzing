import React from "react";
import GenCarousel from "../Carousel";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import Category from "../Category";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
      <Category />
    </Container>
  );
};

export default Home;
