import React from "react";
import { Container, Content, Details, Footer, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.jpeg";

const HouseCard = ({ data = {} }) => {
  const {
    address,
    city,
    country,
    description,
    houseDetails,
    price,
    salePrice,
    attachments,
    category,
  } = data;
  console.log(data);
  return (
    <Container>
      <Img src={attachments?.[0].imgPath || noimg} />
      <Content>
        <div className="subTitle inline">
          {city} {country} {description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"}
          {category?.name || "Category"}
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {houseDetails?.area || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details>
          <Details.Item>
            <div className="info">${price || 0}/mo</div>
            <div className="subTitle">${salePrice || 0}/mo</div>
          </Details.Item>
          <Details style={{ gap: "1rem" }}>
            <div className="icon-style">
              <Icons.Resize />
            </div>
            <div className="icon-style">
              <Icons.Love />
            </div>
          </Details>
        </Details>
      </Footer>
    </Container>
  );
};

export default HouseCard;
