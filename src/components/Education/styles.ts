import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: var(--px-40) 0;
  background-color: var(--gray-950);
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

  div.paragraph-section {
    line-height: var(--px-32);
    margin-bottom: var(--px-40);

    @media (min-width: 576px) {
      width: 54ch;
      word-wrap: break-word;
    }
  }
`;

export const Schooling = styled.div`
  display: grid;
  gap: var(--px-20);
  margin-bottom: var(--px-40);

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Courses = styled.div`
  display: grid;
  gap: var(--px-40);
`;
