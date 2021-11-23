import styled from "styled-components";

export const Info = styled.div`
  padding: var(--px-20);
  background: var(--gray-900);
  border-radius: var(--px-8);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--px-10);

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: var(--green-500);
    position: absolute;
    left: -4px;
    top: var(--px-20);
  }

  .company-info,
  .skills {
    display: flex;
    flex-direction: column;
    gap: var(--px-10);

    h4 {
      font-size: var(--ft-18);
    }
  }

  .company-info > p {
    font-size: var(--ft-14);
    font-weight: 300;
  }

  .company-time {
    font-size: var(--ft-12);
    font-weight: 500;
    color: var(--green-500);

    @media (min-width: 992px) {
      width: var(--px-80);
      position: absolute;
      top: var(--px-24);
      left: -6.25rem;
      text-align: right;
    }
  }
`;
