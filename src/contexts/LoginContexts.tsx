import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iLoginFormValues } from "../components/Form/FormLogin";
import { api } from "../services/api";

export const LoginContext = createContext({} as iUserContext);

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  accessToken: string;
  user: iUserData;
}

export interface iUserData {
  email: string;
  name: string;
  id: number;
}

export interface iLoginResponse {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  id: number;
}

export interface iUserContext {
  userLogin: (
    data: iLoginFormValues,
    loading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export const LoginProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();

  const userLogin = async (
    data: iLoginFormValues,
    loading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      loading(true);

      const response = await api.post<iLoginResponse>("/login", data);

      localStorage.setItem("@TOKEN", response.data.accessToken);

      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

      toast.success("Login realizado com sucesso.");

      setUser(response.data);

      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      loading(false);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        userLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
