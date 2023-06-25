import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";

const HouseItem = () => {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   params?.id &&
  //     fetch(`${url}/houses/list${params?.id}`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setData(res?.data || {});
  //       });
  // }, [params?.id]);

  const params = useParams();
  return <Container>Hello</Container>;
};

export default HouseItem;
