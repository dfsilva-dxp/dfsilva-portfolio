import styled from "styled-components";

export const FullScreenNavUl = styled.ul`
  opacity: 0;
  color: var(--gray-400);
  transition: all 0.8s ease 0s;

  li {
    position: relative;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.2s ease 0.3s;
  }

  li a {
    position: relative;
    font-weight: 400;
    padding: 5px;
    display: flex;
    align-items: center;
    opacity: 0.6;
    transition: all 0.2s ease 0.2s;
  }

  li a:hover {
    opacity: 1;
    color: var(--purple-500);
  }

  li a span {
    font-size: var(--ft-16);
    font-weight: 400;
    margin-right: 5px;
  }

  li a span:first-child {
    color: var(--green-500);
    font-weight: 700;
  }
  li a span:last-child {
    font-size: var(--ft-54);
  }
`;
