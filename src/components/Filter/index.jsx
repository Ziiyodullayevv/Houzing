import React, { useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section, Wrapper } from "./style";
import { Dropdown } from "antd";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  return (
    <Container className="container">
      <Wrapper>
        <Input
          icon={<Icons.Houses />}
          placeholder={"Enter an adress, neighborhood, city, or ZIP code"}
        />
        <Dropdown
          dropdownRender={() => {
            return (
              <MenuWrapper style={{ marginTop: "10px" }}>
                <h2 className="subTitle">Address</h2>
                <Section>
                  <Input ref={countryRef} placeholder={"Country"} />
                  <Input ref={regionRef} placeholder={"Region"} />
                  <Input ref={cityRef} placeholder={"City"} />
                  <Input ref={zipRef} placeholder={"Zip code"} />
                </Section>
                <h2 className="subTitle">Appartment Info</h2>
                <Section>
                  <Input ref={roomRef} placeholder={"Room"} />
                  <Input ref={sizeRef} placeholder={"Size"} />
                  <Input ref={sortRef} placeholder={"Sort"} />
                </Section>

                <h2 className="subTitle">Price</h2>
                <Section style={{ marginBottom: "10px" }}>
                  <Input ref={minRef} placeholder={"Min price"} />
                  <Input ref={maxRef} placeholder={"Max price"} />
                </Section>
              </MenuWrapper>
            );
          }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <div>
            {" "}
            <Button type={"light"}>
              <Icons.Setting />
              Advenced
            </Button>
          </div>
        </Dropdown>
        <Button width={200}>
          <Icons.Search />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
