import styled from "styled-components";

export const Wrapper = styled.nav`
  height: var(--px-80);

  ul {
    display: flex;
    line-height: var(--px-80);
    padding-left: 7.5rem;

    li {
      display: inline-block;
      padding: 0 var(--px-20);
      color: var(--gray-400);
      font-weight: 600;

      a {
        font-size: var(--ft-14);
        transition: color 0.2s linear;

        &:hover {
          color: var(--purple-500);
        }
      }

      &:last-child {
        color: var(--purple-500);
        display: flex;
        align-items: center;

        svg {
          color: var(--gray-400);
          margin-right: var(--px-10);
          font-size: 18px;
        }
      }
    }
  }
`;
