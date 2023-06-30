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

const Menu = styled.div`
  border: 1px rgba(0, 0, 0, 0.4) solid;
  width: 177px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;
`;

export { Menu, Header, Main, Wrapper, Section, Logo, Link };
