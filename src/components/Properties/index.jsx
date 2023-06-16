import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);

  return (
    <div className="container">
      <Container>
        {data.map((value) => {
          return <HouseCard key={value?.id} data={value} />;
        })}
      </Container>
    </div>
  );
};

export default Properties;
