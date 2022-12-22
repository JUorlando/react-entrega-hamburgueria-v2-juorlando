import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 38px;
  color: var(--color-text);
  background-color: var(--color-text-complement);
  border: solid 1px var(--color-text-complement);
  border-radius: 4px;
  padding: 10px;
  :focus {
    color: var(--color-text);
    border: solid 1px var(--color-text-in-primary);
    background-color: var(--color-background);
  }
`;
