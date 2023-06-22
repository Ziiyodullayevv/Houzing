import { styled } from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { Select } from "antd";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
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

const SelectAntd = styled(Select)`
  max-width: 180px;
  width: 100%;
  min-width: 130px;
  &:where(.css-dev-only-do-not-override-12jzuas).ant-select-single:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    height: 44px !important;
    border-radius: 2px;
    line-height: 41px !important;
  }
  &:where(.css-dev-only-do-not-override-12jzuas).ant-select-single
    .ant-select-selector
    .ant-select-selection-item {
    line-height: 41px;
  }
`;

export { Container, Wrapper, Icons, MenuWrapper, Section, SelectAntd };
