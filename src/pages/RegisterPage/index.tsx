import React from "react";
import { FormRegister } from "../../components/Form/FormRegister";
import { FaArchive } from "react-icons/fa";

export const RegisterPage = () => {
  return (
    <div>
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
      <div>
        <FormRegister />
      </div>
    </div>
  );
};
