import React from "react";
import { FormLogin } from "../../components/Form/FormLogin";
import { FaArchive } from "react-icons/fa";
import { StyledMiniBox } from "./style";
import { Container } from "../../styles/container";

export const LoginPage = () => {
  return (
    <Container>
        <FormLogin />
      <StyledMiniBox>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <div className="miniBox">
          <div className="logo">
          <FaArchive />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os <span>melhores </span>
            ingredientes.
          </p>
        </div>
      </StyledMiniBox>
    </Container>
  );
};
