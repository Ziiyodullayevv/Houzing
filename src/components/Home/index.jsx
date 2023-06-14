import React from "react";
import GenCarousel from "../Carousel/inex";
import { Container } from "./style";
import HouseCard from "../HouseCard";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
    </Container>
  );
};

export default Home;
