import { styled } from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  background-color: var(--colorPrimary);
`;

const Main = styled.div``;

const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  color: #fff;
  height: 64px;
  font-size: 16px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  transition: all 0.2s ease;
  .active {
    color: var(--backgroundPrimary);
  }
`;

const Logo = styled(logoImg)`
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

export { Header, Main, Wrapper, Section, Logo, Link };
