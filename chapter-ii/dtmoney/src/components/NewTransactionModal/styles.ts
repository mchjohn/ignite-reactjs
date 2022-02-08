import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
    }

    /* todo input que tiver um input antes dele */
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    border: 0;
    width: 100%;
    height: 4rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5em;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    background-color: var(--green);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  gap: 0.5rem;
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr;
`;

type RadioBoxProps = {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: center;
  border: 1px solid #d7d7d7;
  background-color: ${({isActive, activeColor}) => isActive
    ? transparentize(0.9, colors[activeColor])
    : 'transparent'};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1rem;
    margin-left: 1rem;
    display: inline-block;
    color: var(--text-title);
  }
`