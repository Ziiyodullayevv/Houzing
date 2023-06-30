import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Wrapper, Menu, Section, Logo, Link, Main, Header } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";
import Footer from "../Footer";
import { Dropdown } from "antd";

const Navbar = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/signin");
  };
  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate(`/home`);
    } else {
      navigate(`${name}`);
    }
  };
  return (
    <>
      <Header>
        <Main className="container">
          <Wrapper>
            {/* 1-part: logo */}
            <Section onClick={() => navigate("/home")} logo="true">
              <Logo />
              <h3>Houzing</h3>
            </Section>
            {/* 2-part: Link list */}
            <Section>
              {navbar.map(({ path, title, hidden }, index) => {
                return (
                  !hidden && (
                    <Link key={index} to={path}>
                      {title}
                    </Link>
                  )
                );
              })}
            </Section>
            {/* 3-part: Sign In */}
            <Section>
              {token ? (
                // token bor bolsa dropdown menu ochiladi
                <Dropdown
                  arrow={{ pointAtRight: true }}
                  dropdownRender={() => {
                    return (
                      <Menu>
                        <Menu.Item
                          data-name="myprofile"
                          onClick={onClickProfile}
                        >
                          My profile
                        </Menu.Item>
                        <Menu.Item
                          data-name="favourite"
                          onClick={onClickProfile}
                        >
                          Favourites
                        </Menu.Item>
                        <Menu.Item data-name="logout" onClick={onClickProfile}>
                          Log out
                        </Menu.Item>
                      </Menu>
                    );
                  }}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <Button type={"dark"}>Profile</Button>
                </Dropdown>
              ) : (
                // token yoq bolsa Sign In pagega yuboradi
                <Button onClick={onClick} type="dark">
                  Sign In
                </Button>
              )}
            </Section>
          </Wrapper>
        </Main>
      </Header>
      <Filter />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
