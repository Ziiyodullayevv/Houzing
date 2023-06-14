import React from "react";
import { Container, Content, Details, Footer, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.jpeg";

const HouseCard = ({
  url,
  title,
  bed,
  bath,
  garage,
  ruler,
  info,
  subtitle,
}) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Appartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {bed || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {bath || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {garage || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {ruler || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details>
          <Details.Item>
            <div className="info">$28000/mo</div>
            <div className="subTitle">$7.500/mo</div>
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
