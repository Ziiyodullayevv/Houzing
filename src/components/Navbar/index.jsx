import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          {/* 1-part: logo */}
          <Section onClick={() => navigate("/home")} logo="true">
            <Logo />
            <h3>Houzing</h3>
          </Section>
          {/* 2-part: Link list */}
          <Section>
            {navbar.map(({ id, path, title, hidden }, index) => {
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
            <Button onClick={() => navigate("/signin")}>Sign In</Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
