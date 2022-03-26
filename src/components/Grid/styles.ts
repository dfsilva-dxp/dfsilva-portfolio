import styled from "styled-components";

export const Display = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
