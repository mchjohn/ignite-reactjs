import styled from "styled-components";

export const Container = styled.div`
  gap: 2rem;
  display: grid;
  margin-top: -10rem;
  grid-template-columns: repeat(3, 1fr);

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    background-color: var(--shape);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: var(--shape);
    }
  }
`;
