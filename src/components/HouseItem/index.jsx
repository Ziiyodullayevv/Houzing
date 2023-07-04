import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "../Generic";
import Recent from "../Recent";
import nouser from "../../assets/img/nouser.jpeg";
import noimg from "../../assets/img/noimg.jpeg";

import {
  Blur,
  Container,
  Content,
  Description,
  Details,
  Icons,
  ImageContainer,
  ImgContainer,
  Section,
  User,
  Wrapper,
} from "./style";
import { Yandex } from "../Generic/Yandex";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  return (
    <React.Fragment>
      <ImageContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* asosiy image */}
          <div>
            <ImageContainer.Main
              src={
                (data?.attachments && data?.attachments[0]?.imgPath) || noimg
              }
              alt="test"
            />
          </div>

          {/* 4ta image uchun container */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "250px 250px",
              gridTemplateRows: "150px 150px",
              gap: "20px",
            }}
          >
            {data?.attachments &&
              data?.attachments?.slice(1, 5).map((value, index) => {
                return data?.attachments?.length > 5 && index === 3 ? (
                  <Blur.Container>
                    <div>
                      <ImageContainer.Subimg
                        key={value.id}
                        src={value?.imgPath}
                        alt="test"
                      />
                    </div>
                    <Blur>+{data?.attachments?.length - 5}</Blur>
                  </Blur.Container>
                ) : (
                  <div>
                    <ImageContainer.Subimg
                      key={value.id}
                      src={value?.imgPath}
                      alt="test"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </ImageContainer>

      {/* body part */}
      <Wrapper className="container">
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large>{data?.name}</Content.Title>
              <div className="info">
                {data?.city},{data?.address}, {data?.country}
              </div>
            </Content>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>
              <Icons.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}{" "}
              </Details.Title>
              <Icons.Ruler />
              <Details.Title>
                Area {data?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title>${data?.price || 0}/mo</Details.Title>
                </del>
                <h2 className="title"> ${data?.salePrice || 0}/mo</h2>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Garage />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Garage />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Garage />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
          </Section>
          <div style={{ marginTop: "30px" }}>
            <Yandex />
          </div>
        </Container>
        <Container
          style={{ alignItems: "start", width: "200px" }}
          className="user"
          flex={1}
        >
          <Section style={{ justifyContent: "start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subTitle">Webbrain Academy</div>
              <div className="info">998 33 576 2020</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;
