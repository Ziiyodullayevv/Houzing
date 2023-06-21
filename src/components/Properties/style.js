import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1rem;
`;

export { Container };
