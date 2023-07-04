import React from "react";
import { Container, Content, Details, Footer, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.jpeg";
import { message } from "antd";
import { useContext, useState } from "react";
import { PropertiesContext } from "../../context/properties";

const HouseCard = ({ data = {}, onClick }) => {
  const [state] = useContext(PropertiesContext);
  const {
    name,
    attachments,
    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
    category,
    favorite,
    id,
  } = data;

  const [toggle, setToggle] = useState(false);

  const save = (event) => {
    setToggle((toggle) => !toggle);

    event?.stopPropagation();
    fetch(
      `http://localhost:8080/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Disliked");
        else res?.success && message.info("Liked");
        state.refetch && state.refetch();
      });
  };

  let toggleStyle = toggle ? "icon-style-2" : "icon-style";

  return (
    <Container>
      <Img src={attachments?.[0].imgPath || noimg} />
      <Content>
        <div className="subTitle inline">
          {name || "House Name Not"} & {category?.name || "Category"}
        </div>
        <div className="info-card">
          {country || "Quincy St, Brooklyn, NY, USA"} {city || "City Name"}{" "}
          {houseDetails?.room || 0} rooms
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
            <div onClick={onClick} className="icon-style">
              <Icons.Resize />
            </div>
            <div onClick={save} className={`${toggleStyle}`}>
              <Icons.Love favorite={favorite} />
            </div>
          </Details>
        </Details>
      </Footer>
    </Container>
  );
};

export default HouseCard;
