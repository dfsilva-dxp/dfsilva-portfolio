import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: var(--px-40) 0;
`;

export const Display = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--px-40);

  > .title-section {
    color: var(--gray-900);
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 0;
  }

  @media (min-width: 1366px) {
    grid-template-columns: 500px 1fr;
  }
`;

export const ContactUsContent = styled.div`
  display: grid;
  gap: var(--px-40);
`;

export const SocialContent = styled.div`
  span {
    margin-bottom: var(--px-20);
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
  gap: var(--px-20);

  li a {
    display: block;
    width: var(--px-40);
    height: var(--px-40);
    background-color: var(--gray-950);
    border-radius: 50%;
    font-size: var(--ft-24);
    display: grid;
    place-items: center;
    color: var(--gray-800);

    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--green-500);
    }
  }
`;
