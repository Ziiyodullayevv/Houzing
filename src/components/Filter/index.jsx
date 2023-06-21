import React, { useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section, Wrapper } from "./style";
import { Dropdown } from "antd";
import { replace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  //refs:
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  //paths:
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();
  // console.log(query.get("region"), "params");

  // page paths:
  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${replace(name, value)}`);
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
                    defaultValue={query.get("country")}
                    ref={countryRef}
                    name={"country"}
                    placeholder={"Country"}
                  />
                  <Input
                    onChange={onChange}
                    ref={regionRef}
                    name={"region"}
                    defaultValue={query.get("region")}
                    placeholder={"Region"}
                  />
                  <Input
                    onChange={onChange}
                    ref={cityRef}
                    defaultValue={query.get("address")}
                    name="address"
                    placeholder={"Address"}
                  />
                  <Input
                    onChange={onChange}
                    ref={zipRef}
                    defaultValue={query.get("zip_code")}
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
