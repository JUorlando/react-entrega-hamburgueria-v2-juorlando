import styled from "styled-components";

export const StyledMiniBox = styled.div`
  width: 500px;
  height: 461px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  gap: 24px;

  h1 {
    span {
      color: var(--color-secondary);
      font-size: large;
    }
  }

  .miniBox {
    width: 397px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--color-text-complement);
    border-radius: 4px;
    padding: 24px;
    gap: 24px;

    p {
      width: 261px;
      height: 60px;
      color: var(--color-text-in-primary);
    }

    span {
      color: var(--color-text);
    }

    .logo {
      width: 60px;
      height: 60px;
      color: var(--color-primary);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-text-complement);
      border: 1px solid var(--color-text-complement);
      border-radius: 4px;
    }
  }
`;
