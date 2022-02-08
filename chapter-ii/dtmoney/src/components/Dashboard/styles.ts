import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    height: 3rem;
    padding: 0 2rem;
    font-size: 1rem;
    color: var(--shape);
    border-radius: 0.25rem;
    background-color: var(--purple-light);

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;