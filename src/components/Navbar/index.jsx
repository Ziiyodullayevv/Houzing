import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Wrapper, Section, Logo, Link, Main, Header } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";

const Navbar = () => {
  const navigate = useNavigate();
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
              <Button
                width={100}
                type={"dark"}
                onClick={() => navigate("/signin")}
              >
                Login
              </Button>
            </Section>
          </Wrapper>
        </Main>
      </Header>
      <Filter />
      <Outlet />
    </>
  );
};

export default Navbar;
