import styled from "styled-components";

export const Wrapper = styled.section`
  flex: 1;
  padding-left: var(--px-80);
  height: var(--px-80);
  line-height: var(--px-80);

  > ul {
    display: flex;
    align-items: center;
    gap: var(--px-40);

    li,
    li a {
      font-size: var(--ft-12);
      text-transform: uppercase;
      color: var(--gray-200);
      transition: color 0.2s ease-out;

      &:hover {
        color: var(--white);
      }

      &.phone-number {
        color: var(--green-500);
        font-weight: bold;
        position: relative;
        padding-left: var(--px-40);
        display: flex;
        align-items: center;

        &:before {
          content: "";
          display: block;
          width: 1px;
          height: var(--px-14);
          background-color: var(--gray-200);
          position: absolute;
          top: calc(50% - 7px);
          left: 0;
        }
      }
    }
  }
`;
