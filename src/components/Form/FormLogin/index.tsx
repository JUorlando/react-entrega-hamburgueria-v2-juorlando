import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../../Inputs/Inputs";
import { LoginSchema } from "./LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { LoginContext } from "../../../contexts/UserContesxts/LoginContexts";
import { StyledForm } from "./style";

export interface iLoginFormValues {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(LoginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div className="title">
        <h3>Login</h3>
      </div>
      <div className="inputsBox">
        <Input
          id={"email"}
          type={"email"}
          placeholder={"Email"}
          register={register("email")}
          disabled={loading}
        />
        <label>Email</label>
        {errors.email && <p className="errorLabel">{errors.email.message}</p>}
      </div>
      <div className="inputsBox">
        <Input
          id={"name"}
          type={"text"}
          placeholder={"Nome"}
          register={register("password")}
          disabled={loading}
        />
        <label>Senha</label>
        {errors.password && (
          <p className="errorLabel">{errors.password.message}</p>
        )}
      </div>
      <button className="login" type="submit">
        Login
      </button>
      <p className="menssage">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </p>
      <button className="cadastrar" type="button">
        <Link to="/register">Cadastrar</Link>
      </button>
    </StyledForm>
  );
};
