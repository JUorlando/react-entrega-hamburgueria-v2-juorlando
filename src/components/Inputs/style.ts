import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  background-color: var(--color-grey-2);
  color: var(--color-grey-1);
  border: solid 1px var(--color-grey-2);
  border-radius: 4px;
  padding: 10px;
  :focus {
    color: var(--color-grey-0);
    border: solid 1px var(--color-grey-0);
  }
`;
