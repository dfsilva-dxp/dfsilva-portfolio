import styled from "styled-components";

export const Tags = styled.section`
  .tags {
    color: var(--gray-700);
    position: fixed;
    bottom: 0;
    left: 10px;
    font-size: var(--ft-15);
    font-family: "La Belle Aurore", cursive;
    z-index: -1;
  }
  .top-tags {
    bottom: auto;
    top: 90px;
  }
  .bottom-tags {
    bottom: 20px;
  }
`;
