import React from "react";
import { Blur, Container, Content, Img } from "./style";
import noimg from "../../assets/img/category.png";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={noimg} />
      <Content>{name || "Category"}</Content>
      <Blur />
    </Container>
  );
};

export default CategoryCard;
