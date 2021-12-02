import styled from "styled-components";

export const Wrapper = styled.section`
  height: 120px;
  padding: var(--px-20);
  border-radius: var(--px-8);
  background-color: #000;
  display: grid;
  grid-template-rows: var(--px-20) 1fr var(--px-20);
  gap: var(--px-8);
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: var(--green-500);
    position: absolute;
    left: -4px;
    top: var(--px-20);
  }

  h3,
  h4 {
    font-family: "Poppins", sans-serif;
  }

  h3,
  p {
    color: var(--gray-500);
    font-weight: 400;
  }

  h3 {
    font-size: var(--px-14);
  }

  h4 {
    line-height: var(--ft-18);
  }

  @media (max-width: 767px) {
    &:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1 span;

      h4 {
        font-size: var(--ft-24);
      }
    }
  }

  @media (min-width: 768px) {
    height: 160px;
  }
`;
