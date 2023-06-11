import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link } from "./style";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo="true">
          <Logo />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ id, path, title }, index) => {
            return (
              <Link key={index} to={path}>
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign In</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
