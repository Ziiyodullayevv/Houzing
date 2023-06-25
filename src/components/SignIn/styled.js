import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 546px;
  display: flex;
  justify-content: center;
  background: white;
  gap: 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
`;

export { Content, Wrapper };
