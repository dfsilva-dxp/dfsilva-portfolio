import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: var(--px-80) auto var(--px-80);
`;

export const Body = styled.section`
  min-height: calc(100vh - 5rem);
`;
