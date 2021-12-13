import styled from "styled-components";

export const Container = styled.div`
  padding: var(--px-10) 0;

  &,
  & > ul {
    display: flex;
    align-items: center;
    gap: var(--px-20);
    color: var(--gray-400);
    transition: color 0.2s ease-out;

    @media (min-width: 576px) {
      gap: var(--px-40);
    }
  }

  & > ul li a {
    font-size: 24px;

    &:hover {
      color: var(--purple-500);
    }
  }
`;
