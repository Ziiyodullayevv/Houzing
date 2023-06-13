import { styled } from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Setting = styled(setting)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid gray;
  border-radius: 4px;
`;

const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export { Container, Icons, MenuWrapper, Section };
