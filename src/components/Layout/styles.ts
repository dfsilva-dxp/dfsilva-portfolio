import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: table;
  display: grid;
  grid-template-rows: auto var(--px-80);
`;

export const Body = styled.section`
  min-height: calc(100vh - 5rem);
`;
