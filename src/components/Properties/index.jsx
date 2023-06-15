import React, { useEffect } from "react";
import { Container } from "./style";

const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  console.log(url);

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  });

  return <Container></Container>;
};

export default Properties;
