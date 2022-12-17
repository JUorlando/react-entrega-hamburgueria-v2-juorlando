import React from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { StyledInput } from "./style";

interface iInputProps {
  id?: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn;
  placeholder?: string;
  disabled?: boolean;
}

export const Input = ({
  id,
  type,
  register,
  placeholder,
  disabled,
}: iInputProps) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...register}
    />
  );
};
