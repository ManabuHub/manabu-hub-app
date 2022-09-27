import { useState } from "react";

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return {
    email,
    password,
    rePassword,
    setEmail,
    setPassword,
    setRePassword,
  };
};
