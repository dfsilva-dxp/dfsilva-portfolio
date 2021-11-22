import styled from "styled-components";

export const Banner = styled.section`
  height: calc(100vh - 5rem);
  padding: var(--px-40) 0;
  display: flex;
  align-items: center;
`;

export const Display = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 2fr;

    &:before {
      content: "";
      width: 100%;
      display: block;
    }
  }

  @media (min-width: 1366px) {
    grid-template-columns: 500px 1fr;
  }
`;

export const Into = styled.div`
  strong {
    display: inline-block;
    background: var(--green-500);
    padding: var(--px-4) var(--px-10);
    border-radius: var(--px-4);
    color: var(--gray-950);
    margin-bottom: var(--px-20);
  }

  h1 {
    position: relative;
    font-size: var(--ft-72);
    line-height: var(--ft-72);
    margin-bottom: var(--px-20);

    &::before,
    &::after {
      font: 400 var(--ft-15) / var(--ft-15) "La Belle Aurore", cursive;
      position: absolute;
    }

    &::before {
      content: "<h1>";
    }
    &::after {
      content: "</h1>";
      bottom: 0;
      right: 0;
    }

    @media (min-width: 768px) {
      max-width: 15ch;
    }
  }

  p {
    margin-bottom: var(--px-40);
  }

  a {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--green-500);
    text-decoration: underline;
  }
`;
