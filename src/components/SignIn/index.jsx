import React, { useState } from "react";
import { Content, Wrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  const info = () => {
    message.info("Muvaffaqiyatli tizmga kirildi");
  };

  const worning = () => {
    message.info("Malumot xato kiritilgan ");
  };

  const onSubmit = async () => {
    console.log(body);
    request({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      console.log(res);
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
        info();
      } else {
        worning();
      }
    });
  };

  return (
    <div className="container">
      <Wrapper>
        <Content>
          <div className="subTitle">Sign in</div>
          <Input onChange={onChange} placeholder="email" type="email" />
          <Input onChange={onChange} placeholder="password" type="password" />
          <Button width="%" onClick={onSubmit}>
            Login
          </Button>
        </Content>
      </Wrapper>
    </div>
  );
};

export default Signin;
