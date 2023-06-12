import { styled } from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  transition: all 0.2s ease;
  .active {
    color: red;
  }
`;

const Logo = styled(LogoIcon)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 32px;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;

export { Container, Main, Wrapper, Section, Logo, Link };
