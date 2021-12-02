import styled from "styled-components";

export const Wrapper = styled.section`
  padding: var(--px-40) 0;
  display: flex;
  align-items: center;
`;

export const Display = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--px-40);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 0;
  }

  @media (min-width: 1366px) {
    grid-template-columns: 500px 1fr;
  }
`;

export const ExperiencyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--px-20);
`;
