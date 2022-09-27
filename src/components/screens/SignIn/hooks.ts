import { useState } from "react";

export const useSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return {
    email,
    password,
    setEmail,
    setPassword,
  };
};
