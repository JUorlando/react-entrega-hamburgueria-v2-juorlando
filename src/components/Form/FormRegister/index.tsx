import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterContext } from "../../../contexts/RegisterContext";
import { Input } from "../../Inputs/Inputs";
import { RegisterSchema } from "./RegisterSchema";
import { SubmitHandler } from "react-hook-form/dist/types";

export interface iFormRegisterValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const FormRegister = () => {
  const { registerUser } = useContext(RegisterContext);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterValues>({
    resolver: yupResolver(RegisterSchema),
  });

  const submit: SubmitHandler<iFormRegisterValues> = (data) => {
    registerUser(data, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <h3>Cadastrar</h3>
        <button>
          <Link to="/">Voltar ao Login</Link>
        </button>
      </div>
      <label>Nome</label>
      <Input
        id={"name"}
        type={"text"}
        placeholder={"Nome"}
        register={register("name")}
        disabled={loading}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <label>Email</label>
      <Input
        id={"email"}
        type={"email"}
        placeholder={"Email"}
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Input
        id={"password"}
        type={"password"}
        placeholder={"Senha"}
        register={register("password")}
        disabled={loading}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <Input
        id={"confirmPassword"}
        type={"password"}
        placeholder={"Confirmar Senha"}
        register={register("confirmPassword")}
        disabled={loading}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <button type="submit">Cadastrar</button>
    </form>
  );
};
