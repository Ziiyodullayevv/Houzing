import React from "react";
import { Container, Content, Details, Footer, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.jpeg";

const HouseCard = ({ url, title }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Appartment Nice Wiew"}</div>
        <div className="info">Quincy St, Brooklyn, NY, USA</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed 23</div>
          </Details.Item>

          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath 34</div>
          </Details.Item>

          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage 45</div>
          </Details.Item>

          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler 51</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer></Footer>
    </Container>
  );
};

export default HouseCard;
