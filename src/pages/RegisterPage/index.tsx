import React from "react";
import { FormRegister } from "../../components/Form/FormRegister";
import { FaArchive } from "react-icons/fa";
import { Container } from "../../styles/container";
import { StyledMiniBox } from "../LoginPage/style";

export const RegisterPage = () => {
  return (
    <Container>
      <StyledMiniBox>
        <h1>
          Burguer<span>Kenzie</span>
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
        <FormRegister />
    </Container>
  );
};
