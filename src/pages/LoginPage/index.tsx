import React from "react";
import { FormLogin } from "../../components/Form/FormLogin";
import { FaArchive } from "react-icons/fa";

export const LoginPage = () => {
  return (
    <div>
      <div>
        <FormLogin />
      </div>
      <div>
        <h1>
          Burguer<span>Kenzie</span>
        </h1>
        <div>
          <FaArchive />
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </p>
        </div>
      </div>
    </div>
  );
};
