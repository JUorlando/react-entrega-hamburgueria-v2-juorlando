import styled from "styled-components";

export const StyledForm = styled.form`
  width: 500px;
  height: 461px;
  display: flex;
  flex-direction: column;
  border: solid 1px var(--color-text-complement);
  border-radius: 4px;
  gap: 22px;
  padding: 24px;
  margin-right: 200px;

  h3{
    font-weight: bold;
  }

  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .return{
        color: var(--color-primary);
    }
  }

  input{
    width: 452px;
    height: 60px;
    border: solid 1px var(--color-text);
    border-radius: 4px;

  }

  .login{
    width: 452px;
    height: 60px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border: solid 1px var(--color-primary);
    border-radius: 4px;
  }

  .cadastrar{
    width: 452px;
    height: 60px;
    background-color: var(--color-text-in-primary);
    color: var(--color-text-light);
    border: solid 1px var(--color-text-in-primary);
    border-radius: 4px;
  }
`