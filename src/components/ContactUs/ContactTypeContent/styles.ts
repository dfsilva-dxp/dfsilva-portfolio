import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-top: var(--px-8);
    }

    span {
      font-size: var(--ft-14);
      font-weight: 500;
    }
  }
`;

export const Heading = styled.header`
  margin-bottom: var(--px-20);
  display: flex;
  align-items: center;
  gap: var(--px-10);

  svg {
    color: var(--green-500);
    font-size: var(--ft-20);
  }

  > h4 {
    font-family: "Poppins", sans-serif;
    font-size: var(--ft-16);
    text-transform: uppercase;
    color: var(--gray-700);
  }

  @media (min-width: 992px) {
    > svg {
      position: absolute;
      left: -40px;
      top: 0;
    }
  }
`;
