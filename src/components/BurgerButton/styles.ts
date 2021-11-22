import styled from "styled-components";

export const NavContent = styled.div`
  width: var(--px-40);
  height: var(--px-80);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnNavContainer = styled.button`
  width: 40px;
  height: 30px;
  background: transparent;
  border: none;
  outline: transparent;
  cursor: pointer;
  z-index: 20;

  .btn-nav {
    width: 100%;
    height: 2px;
    background: var(--gray-800);
    top: 0;
    transition: all ease 0.2s;
    position: relative;
  }
  .btn-nav:before,
  .btn-nav:after {
    content: "";
    position: absolute;
    left: 0;
    background: var(--gray-800);
    height: 100%;
    transition: all ease 0.3s;
  }
  .btn-nav:before {
    top: -8px;
    width: 50%;
  }
  .btn-nav:after {
    top: 8px;
    width: 75%;
  }
  &:hover .btn-nav:before,
  &:hover .btn-nav:after {
    width: 100%;
  }
  &.close-menu .btn-nav {
    transform: rotate(-45deg);
    background: var(--white);
  }
  &.close-menu .btn-nav:after {
    opacity: 0;
    transition: all ease 0.2s;
  }
  &.close-menu .btn-nav:before {
    top: 0;
    transform: rotate(90deg);
    width: 100%;
    transition: all ease 0.2s;
    background: var(--white);
  }
`;
