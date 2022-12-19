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
      <h3>Login</h3>
      <label>Email</label>
      <Input
        type={"email"}
        placeholder={"E-mail"}
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <label>Senha</label>
      <Input
        type={"password"}
        placeholder={"Senha"}
        register={register("password")}
        disabled={loading}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button className="login" type="submit">Login</button>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <button className="cadastrar" type="button">
        <Link to="/register">Cadastrar</Link>
      </button>
    </StyledForm>
  );
};
