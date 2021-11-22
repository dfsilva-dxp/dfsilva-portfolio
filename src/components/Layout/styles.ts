import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: var(--px-80) 1fr var(--px-80);
  gap: var(--px-40);
`;

export const Body = styled.section`
  overflow-y: auto;
`;
