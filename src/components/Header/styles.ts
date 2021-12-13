import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  background-color: var(--white);
  width: 100%;
  height: var(--px-80);
  border-bottom: 1px solid var(--gray-50);

  & > .container {
    display: flex;
    align-items: center;
  }
`;
