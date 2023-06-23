import React, { useRef, useState, useEffect } from "react";
import { Input, Button } from "../Generic";
import {
  Container,
  Icons,
  MenuWrapper,
  Section,
  SelectAntd,
  Wrapper,
} from "./style";
import { Dropdown } from "antd";
import { replace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  //paths:
  const { REACT_APP_BASE_URL: url } = process.env; // env faylida yashirilgan url olish uchun
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  // console.log(query.get("region"), "params")

  // selectni map qilish uchun:
  // useEffect(() => {
  //   fetch(`${url}/category/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //     });
  // }, []);

  // selectga name biriktirish uchun:
  // useEffect(() => {
  //   let [select] = data?.fitler(
  //     (category) => category.id === Number(query.get("category_id"))
  //   );
  //   select?.name && setFilter(select?.name);
  //   !query.get("category_id") && setFilter("Select Category");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location?.search, data]);

  // // categories filter:
  // const categoriesFilter = (category_id) => {
  //   navigate(`/properties/${replace("category_id", category_id)}`);
  // };

  // // sort filter:
  // const sortFilter = (sort) => {
  //   navigate(`/properties/${replace("sort", sort)}`);
  // };

  //refs:
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

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

                  <SelectAntd defaultValue={"Select Sort"}>
                    <SelectAntd.Option value={""}>DeSelect</SelectAntd.Option>
                    <SelectAntd.Option value={"asc"}>Osuvchi</SelectAntd.Option>
                    <SelectAntd.Option value={"desc"}>
                      Kamayuvchi
                    </SelectAntd.Option>
                  </SelectAntd>

                  {/* Select orqali categorydagi malumotlar chiqarildi: */}
                  <SelectAntd value={filter}>
                    <SelectAntd.Option value={""}>Default</SelectAntd.Option>
                    {/* {data.map((value) => {
                      return (
                        <SelectAntd.Option onChange={categoriesFilter} value={value?.id || "Test"}>
                          {value?.name || "Category"}
                        </SelectAntd.Option>
                      );
                    })} */}
                    <SelectAntd.Option value={"Hello"}>hello</SelectAntd.Option>
                    <SelectAntd.Option value={"Hello"}>hello</SelectAntd.Option>
                    <SelectAntd.Option value={"Hello"}>hello</SelectAntd.Option>
                  </SelectAntd>
                </Section>

                <h2 className="subTitle">Price</h2>
                <Section style={{ marginBottom: "10px" }}>
                  <Input
                    onChange={onChange}
                    ref={minRef}
                    name="min_price"
                    placeholder={"Min price"}
                  />
                  <Input
                    onChange={onChange}
                    ref={maxRef}
                    name="max_price"
                    placeholder={"Max price"}
                  />
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
