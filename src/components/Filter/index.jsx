import React, { useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section, Wrapper } from "./style";
import { Dropdown } from "antd";
import { replace } from "../../hooks/useReplace";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  console.log(replace("address", "toshkent"));

  const onChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    navigate(`/properties${replace(name, value)}`);
  };

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
                  <Input
                    onChange={onChange}
                    ref={countryRef}
                    name={"country"}
                    placeholder={"Country"}
                  />
                  <Input
                    onChange={onChange}
                    ref={regionRef}
                    name={"region"}
                    placeholder={"Region"}
                  />
                  <Input
                    onChange={onChange}
                    ref={cityRef}
                    name="city"
                    placeholder={"City"}
                  />
                  <Input
                    onChange={onChange}
                    ref={zipRef}
                    name="zip_code"
                    placeholder={"Zip code"}
                  />
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
